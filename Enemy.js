class Enemy {
    constructor() {
        this.x = null;
        this.y = null;
        this.w = null;
        this.h = null;
        this.img = null;
        this.vector = null;
        this.speed = null;
        this.active = false;
        this.hp = null;
        this.boss = false;
        this.nowStage = 0; //현재 스테이지

        this.score = 0
        this.fireTerm = 2000;
    }

    reset(x, y, w, h, img, s, v, hp, boss = false) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = s;
        this.vector = v;
        this.active = true;
        this.hp = hp;
        this.boss = boss;

        if (boss === true) this.bossFire();
        this.fire();
    }

    setDamage(value) {
        this.hp -= value;
        if (this.hp <= 0) {
            this.explosion();
        }

        if (this.boss == true && this.hp <= 0) {
            // setTimeout(() => {
                this.nowStage++;
                console.log(this.nowStage);
            App.app.bossClears(this.nowStage);
            console.log(this.nowStage + " 스테이지 클리어");

            // alert("스테이지를 진짜로 진짜진짜로 클리어하였습니다.");
            // }, 500);
        }
    }

    explosion() {
        //폭발이펙트 생성
        App.app.getOrCreateExplosion(this.x, this.y, this.w, this.w);
        this.active = false;
    }

    fire() {
        if (!this.active) return;
        App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5, 3, 300, new Vector(0, 1));

        setTimeout(this.fire.bind(this), this.fireTerm);
    }

    bossFire() {
        if (!this.active) return;
        App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5, 3, 300, new Vector(-1, 1));
        App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5, 3, 300, new Vector(0, 1));
        App.app.getOrCreateBullet(this.x + this.w / 2, this.y + this.h - 5, 3, 300, new Vector(1, 1));
        App.app.getOrCreateBullet(this.x + this.w / 2 - 20, this.y + this.h - 5, 3, 300, new Vector(-1, 1));
        App.app.getOrCreateBullet(this.x + this.w / 2 + 20, this.y + this.h - 5, 3, 300, new Vector(1, 1));
        App.app.getOrCreateBullet(this.x + this.w / 2 - 30, this.y + this.h + 30, 3, 300, new Vector(1, 1));
        App.app.getOrCreateBullet(this.x + this.w / 2 + 30, this.y + this.h - 30, 3, 300, new Vector(1, 1));

        App.app.getOrCreateBullet(this.x + this.w / 2 + 60, this.y + this.h, 3, 300, new Vector(0, 1));
        App.app.getOrCreateBullet(this.x + this.w / 2 - 60, this.y + this.h, 3, 300, new Vector(0, 1));

        App.app.getOrCreateBullet(this.x + this.w / 2 - 150, this.y + this.h, 3, 300, new Vector(0, 1));
        App.app.getOrCreateBullet(this.x + this.w / 2 + 150, this.y + this.h, 3, 300, new Vector(0, 1));

        App.app.getOrCreateBullet(this.x + this.w / 2 - 150, this.y + this.h, 3, 300, new Vector(-1, 1));

        setTimeout(this.bossFire.bind(this), this.fireTerm);
    }

    update(d) {
        if (!this.active) return;
        let normal = this.vector.normalize();
        this.x += normal.x * d * this.speed;
        this.y += normal.y * d * this.speed;

        if (this.x < -this.w * 2 || this.y < - this.h * 2
            || this.x > this.w + App.app.gameWidth
            || this.y > this.h + App.app.gameHeight
        ) {
            this.active = false;
        }
    }

    checkCollision(x, y, r) {
        let centerX = this.x + this.w / 2;
        let centerY = this.y + this.h / 2;

        let d = Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2);

        return d < Math.pow(r + Math.min(this.w, this.h) / 2, 2);
    }

    render(ctx) {
        if (!this.active) return;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}