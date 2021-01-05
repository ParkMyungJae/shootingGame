class App {
    constructor() {
        App.app = this; // 앱에 스태틱 으로 넣음;
        this.gameWidth = 600;
        this.gameHeight = 850;

        this.canvas = document.querySelector("#myGame");
        this.ctx = this.canvas.getContext("2d");
        this.start = false;
        this.imageList = {}; //이미지 저장 오브젝트

        this.player = null;
        this.backList = []; //배경그림 리스트
        this.playerBulletList = []; //플레이어 총알 리스트

        this.enemyList = []; //적기체 저장 리스트
        this.expList = []; //폭발리스트
        this.heartList = []; //하트 리스트

        //여기에 스테이지 데이터 제어 변수들이 들어갑니다.
        this.gameTimer = 0; //게임이 시작되고 몇초가 흘렀는지 저장
        this.stageIdx = 0; //지금 몇번째 적을 만들어내는지 저장
        this.stageData = []; //스테이지의 데이터

        this.score = 0; // 현재 점수

        this.gameStart = false;
        this.bossClear = false; // 보스 클리어 및 스테이지 클리어 여부

        this.nowStage = 0; //현재 스테이지

        $(".scrollDisable").on("click", () => {
            if (this.gameStart !== true) alert("게임이 시작되야만 스크롤 제한이 가능합니다."); return;
        });

        document.querySelector("#startBtn").addEventListener("click", () => {
            this.gameStart = true;
            document.querySelector("#startBtn").style.display = "none";
            document.querySelector("#startImg").style.display = "none";

            window.location.href = "#main";

            this.init();
        });
    }

    async init() {
        if (this.gameStart !== true) return;

        this.imageList.player = await this.loadImage("player.png");
        this.imageList.back = await this.loadImage("back.png");
        this.imageList.enemy = await this.loadImage("enemy1.png");
        this.imageList.explosion = await this.loadImage("explosion.png");
        this.imageList.heart = await this.loadImage("heart.png");

        //백그라운드 생성
        for (let i = 0; i < 3; i++) {
            this.backList.push(
                new Background(0, - i * this.gameHeight,
                    this.gameWidth, this.gameHeight,
                    this.imageList.back));
        }

        //플레이어 생성(x좌표 y좌표 너비 높이 이미지)
        this.player = new Player(
            this.gameWidth / 2 - 30, this.gameHeight - 60,
            60, 40, this.imageList.player, this);

        this.stage = new Stage(this.gameWidth, this.gameHeight, this.imageList);

        // this.stageData = this.stage.stage1;

        this.stageData = this.stage.stage0;

        console.log(this.nowStage);
        console.log(this.stageData);
        // this.stageData = stage.stage2;

        // let tempExp = new Explosion(100, 100, 60, 60, this.imageList.explosion);
        // this.expList.push(tempExp);

        requestAnimationFrame(this.frame.bind(this));
    }

    getOrCreateExplosion(x, y, w, h) {
        let exp = this.expList.find(x => !x.active);
        if (exp === undefined) {
            exp = new Explosion(this.imageList.explosion);
            this.expList.push(exp);
        }
        exp.setActive(x, y, w, h);
    }

    getOrCreateBullet(x, y, r, s, v, isEnemy = true) {
        let bullet = this.playerBulletList.find(x => !x.active);
        if (bullet == undefined) {
            bullet = new Bullet();
            this.playerBulletList.push(bullet);
        }
        bullet.setActive(x, y, r, s, v, isEnemy);
    }

    getOrCreateEnemy(data) {
        let e = this.enemyList.find(x => !x.active);
        if (e === undefined) {
            e = new Enemy();
            this.enemyList.push(e);
        }

        e.reset(data.x, data.y, data.w, data.h, data.img, data.s, data.v, data.hp, data.boss);

        // boss 출현
        // if(data.boss == true) {
        //     if(e.active == false) {
        //         alert("클리어");
        //     }
        // }


    }

    loadImage(name) {
        return new Promise((res, rej) => {
            let img = new Image();
            img.src = `./images/${name}`;
            img.addEventListener("load", () => {
                res(img);
            });
        });
    }

    frame(time) {
        if (!this.start) this.start = time;
        let delta = time - this.start;
        this.start = time;
        this.update(delta / 1000);
        this.render();
        requestAnimationFrame(this.frame.bind(this));
    }


    bossClears(idx) {
        this.nowStage = idx;
        this.bossClear = true;
        this.score = this.score + 10000;
        setTimeout(() => {
            this.bossClear = false;
        }, 5000);
    }

    update(delta) {
        this.gameTimer += delta; //이렇게 되면 게임 진행시간이 this.gameTimer에 들어간다.

        this.backList.forEach(back => back.update(delta));
        if (this.backList[0].y > this.gameHeight) {
            let first = this.backList.shift();
            first.y = this.backList[this.backList.length - 1].y - this.gameHeight;
            this.backList.push(first);
        }

        if (this.gameStart !== true) return; //게임 멈춤

        this.player.update(delta);
        this.player.checkOut(this.gameWidth, this.gameHeight);

        if (this.nowStage == 0) {
            let nowEnemy = this.stageData[this.stageIdx];
            if (nowEnemy !== undefined && nowEnemy.time <= this.gameTimer) {
                this.getOrCreateEnemy(nowEnemy.data);
                this.stageIdx++;
            }
            this.stageData = this.stage.stage0;
        } else if (this.nowStage == 1) {
            let nowEnemy = this.stageData[this.stageIdx];
            if (nowEnemy !== undefined && nowEnemy.time <= this.gameTimer) {
                this.getOrCreateEnemy(nowEnemy.data);
                this.stageIdx++;
            }
            this.stageData = this.stage.stage1;
        }

        // if(this.nowStage == 1) {
        //     console.log(this.nowStage);
        //     this.stageData = this.stage.stage1;
        // }

        // console.log(this.stageData.length + "스테이지원");
        //     console.log(this.stageIdx + "횟수");

        if (this.stageData.length == this.stageIdx) {

            // this.stageData = this.stage.stage2;


        }

        this.playerBulletList.forEach(b => b.update(delta));
        this.enemyList.forEach(e => e.update(delta));

        this.playerBulletList.filter(b => b.active).forEach(b => {
            if (!b.isEnemy) {
                this.enemyList.filter(e => e.active).forEach(e => {
                    if (e.checkCollision(b.x, b.y, b.r)) {
                        e.setDamage(b.damage);
                        this.score++;
                        b.active = false;

                    }
                });
            } else {
                //적총알이 플레이어에 충돌했는지를 검사
                if (this.player.checkCollision(b.x, b.y, b.r)) {
                    this.player.setDamage(b.damage);
                    b.active = false;

                    if (this.player.hp == 0) {
                        this.gameStart = false;
                        $(document).off("keydown.disableScroll");
                        $('#main').off('scroll touchmove mousewheel');
                    }
                }
            }

        });

        this.expList.forEach(e => e.update(delta));
    }

    render() {
        this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        this.backList.forEach(back => back.render(this.ctx));
        this.player.render(this.ctx);
        this.playerBulletList.forEach(b => b.render(this.ctx));
        this.enemyList.forEach(e => e.render(this.ctx));
        this.expList.forEach(e => e.render(this.ctx));

        if (this.gameStart != true) {
            this.ctx.font = "100px malgun gothic";
            this.ctx.textAlign = "left";
            this.ctx.fillStyle = "#fff";
            this.ctx.fillText("Game Over", 39, 400);
            this.gameStart = false;

            document.querySelector("#startBtn").style.display = "block";

            return;
        } else {
            //게임 현황 (상태)
            this.ctx.font = "25px malgun gothic";
            this.ctx.textAlign = "left";
            this.ctx.textBaseline = "top";
            this.ctx.fillStyle = "#fff";
            this.ctx.fillText("Score : " + this.score, 10, 10);

            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.fillStyle = "#fff";
            this.ctx.fillText("TIME : " + Math.floor(this.gameTimer) + "s", 590, 10);
        }

        if (this.bossClear == true) {
            this.ctx.font = "80px malgun gothic";
            this.ctx.textAlign = "left";
            this.ctx.fillStyle = "#ffffff";
            this.ctx.fillText(this.nowStage + " Stage Clear", 58, 400);
        }

        // //하트그리기
        // let w = 100, h = 100;

        // this.ctx.strokeStyle = "#000000";
        // this.ctx.strokeWeight = 3;
        // this.ctx.shadowOffsetX = 4.0;
        // this.ctx.shadowOffsetY = 4.0;
        // this.ctx.lineWidth = 10.0;
        // this.ctx.fillStyle = "#FF0000";
        // var d = Math.min(w, h);
        // var k = 120;

        // this.ctx.moveTo(k, k + d / 4);
        // this.ctx.quadraticCurveTo(k, k, k + d / 4, k);
        // this.ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
        // this.ctx.quadraticCurveTo(k + d / 2, k, k + d * 3 / 4, k);
        // this.ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
        // this.ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3 / 4, k + d * 3 / 4);
        // this.ctx.lineTo(k + d / 2, k + d);
        // this.ctx.lineTo(k + d / 4, k + d * 3 / 4);
        // this.ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
        // this.ctx.stroke();
        // this.ctx.fill();

    }
}