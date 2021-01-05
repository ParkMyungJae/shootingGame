<?php require("./php/db.php"); ?>

<div id="preloder">
	<div class="loader"></div>
</div>

<header>
	<div class="container">
		<a class="site-logo" href="/">
			<img src="img/logo.png" alt="img">
		</a>


		<?php if (isset($_SESSION["user"])) : ?>
			<a href="./php/logout.php" style="float: right; height: 20px; margin-top: 12px;"><button class="btn btn-primary"><i class="fa fa-sign-out"></i></button></a>
			<a class="ui yellow image label float-right user-login">
				<img src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" />
				<?= $_SESSION["user"]->nickname ?>
				<div class="detail">일반 사용자</div>
			</a>
		<?php else : ?>
			<a href="login.php">
				<div class="user-panel">
					Login / Register
				</div>
			</a>
		<?php endif; ?>

		<nav class="main-menu">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="review.html">Games</a></li>
				<li><a href="categories.html">Blog</a></li>
				<li><a href="community.html">Forums</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>