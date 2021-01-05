<!-- http://itch.io/ -->

<!DOCTYPE html>
<html lang="ko">

<head>
	<title>슈팅게임 by박명재</title>

	<?php require("./head.php"); ?>
</head>

<body>
	<?php require("header.php"); ?>

	<div class="visual">
		<img src="./img/visual2.jpg" alt="logo" style="width: 100%;">

		<div class="visualText">
			<h3 id="visualPoint1">가자</h3>
			<h1 id="visualPoint2">슈팅게임</h1>

			<i class="fa fa-arrow-circle-down arrow" style="font-size: 3.5vw; float: right; margin: 10px 20px;"></i>
		</div>
	</div>

	<div class="main_info">
		<div class="page">
			<div class="deg">
				<center>
					<div class="textBox">
						<h1>고전 스타일 슈팅게임</h1>
						<p>총알을 피하는 짜릿함</p>
						<p>실력으로 이기는 게임!</p>
					</div>
				</center>
			</div>

			<div class="card index-card" style="width: 18rem;">
				<img src="images/player.png" class="card-img-top index-card-img" alt="img">
				<div class="card-body">
					<h5 class="card-title">고급진 플레이어</h5>
					<p class="card-text">당장 날아갈 것만 같은 공격적인 플레이어 입니다. 더퍼니잇이 여러분들의 멋진 비행을 기다리고 있습니다!</p>
					<a href="#!" class="btn btn-primary float-right">자세히 보기</a>
				</div>
			</div>

			<div class="card index-card" style="width: 18rem;">
				<img src="images/enemy1.png" class="card-img-top index-card-img" alt="img">
				<div class="card-body">
					<h5 class="card-title">강력한 보스</h5>
					<p class="card-text">모든 스테이지의 끝에는 거대한 보스가 여러분들을 기다리고 있습니다! 적군을 어서 물리치세요! 달려달려~~</p>
					<a href="#!" class="btn btn-primary float-right">자세히 보기</a>
				</div>
			</div>

			<div class="card index-card" style="width: 18rem;">
				<img src="images/heart.png" class="card-img-top index-card-img" alt="img">
				<div class="card-body">
					<h5 class="card-title">체력 회복 기능</h5>
					<p class="card-text">플레이어가 총 세번의 피해를 입으면 패배하게 됩니다. 다만 아이템을 획득하여 체력을 회복하실 수 있습니다.</p>
					<a href="#!" class="btn btn-primary float-right">자세히 보기</a>
				</div>
			</div>
		</div>
	</div>

	<div id="main">
		<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
			<center>
				<div class="game" style="width: 600px; height: 850px; position: relative">
					<img src="./images/player.png" alt="img" id="startImg">
					<p id="startBtn">START</p>

					<canvas id="myGame" width="600" height="850"><button>시작</button></canvas>

					<script>
						window.addEventListener("load", () => {
							let app = new App();
						});
					</script>

					<div class="scrollBox">
						<a href="#main"><button class="btn btn-primary scrollDisable">스크롤 막기</button></a>
						<button class="btn btn-danger scrollEnable">스크롤 풀기</button>
					</div>
				</div>

			</center>
		</div>
	</div>

	<?php require("lib.php") ?>

	<?php require("footer.php") ?>
</body>

</html>