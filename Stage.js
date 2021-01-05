class Stage {
    constructor(gw, gh, imgs) {

        this.stage0 = [
            {
                time: 2,
                data: {
                    x: gw / 3 - 30,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    hp: 1
                }
            },
            {
                time: 2,
                data: {
                    x: gw / 3 * 2 - 30,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    hp: 1
                }
            },
            {
                time: 6,
                data: {
                    x: -50,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 6,
                data: {
                    x: gw,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 7,
                data: {
                    x: -50,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 7,
                data: {
                    x: gw,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 8,
                data: {
                    x: -50,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 8,
                data: {
                    x: gw,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 9,
                data: {
                    x: -50,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 9,
                data: {
                    x: gw,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 10,
                data: {
                    x: -60,
                    y: 0,
                    w: 80,
                    h: 60,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 2
                }
            },
            {
                time: 10,
                data: {
                    x: gw,
                    y: 0,
                    w: 80,
                    h: 60,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 2
                }
            },
            {
                time: 15,
                data: {
                    x: -50 / 2 + 125,
                    y: 50,
                    w: 400,
                    h: 250,
                    img: imgs.enemy,
                    s: 0,
                    v: new Vector(0, 1),
                    hp: 50,
                    boss: true
                }
            },
        ];

        this.stage1 = [
            {
                time: 22,
                data: {
                    x: gw / 2 - 30,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    hp: 1
                }
            },
            {
                time: 23,
                data: {
                    x: gw / 2 - 30,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    hp: 1
                }
            },
            {
                time: 24,
                data: {
                    x: gw / 2 - 30,
                    y: -40,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    hp: 1
                }
            },
            {
                time: 25,
                data: {
                    x: -50,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 25,
                data: {
                    x: gw,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 26,
                data: {
                    x: -50,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 26,
                data: {
                    x: gw,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 27,
                data: {
                    x: -50,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 27,
                data: {
                    x: gw,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 28,
                data: {
                    x: gw / 3 - 30,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 28,
                data: {
                    x: gw / 3 - 30,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 30,
                data: {
                    x: gw / 3 - 30,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    hp: 1
                }
            },
            {
                time: 30,
                data: {
                    x: gw / 2 + 100,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 1
                }
            },
            {
                time: 32,
                data: {
                    x: gw / 2 + 100,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(-1, 1),
                    hp: 1
                }
            },
            {
                time: 32,
                data: {
                    x: gw / 2 + 100,
                    y: 0,
                    w: 60,
                    h: 40,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    hp: 1
                }
            },
            {
                time: 34,
                data: {
                    x: gw / 2,
                    y: 0,
                    w: 160,
                    h: 100,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(0, 1),
                    hp: 10
                }
            },
            {
                time: 34,
                data: {
                    x: -50,
                    y: 0,
                    w: 160,
                    h: 100,
                    img: imgs.enemy,
                    s: 100,
                    v: new Vector(1, 1),
                    hp: 10
                }
            },
            {
                time: 38,
                data: {
                    x: -50 / 2 + 125,
                    y: 50,
                    w: 400,
                    h: 250,
                    img: imgs.enemy,
                    s: 0,
                    v: new Vector(0, 1),
                    hp: 50,
                    boss: true
                }
            },
        ];
    }
}