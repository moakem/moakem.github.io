<?php include 'header.php'; 
var type = $_GET['type'];?>
		<section id="header">
			<span><a href="index.php">&larr; Customize a Different Design</a></span>
			<h1>
				Leather <?= type ?> Customization <br/>
			</h1>
			<nav>
				<h3>Which style would you like to see?</h3>
				<ul>
					<li id="sm" name="layers" onclick="layers(this)">Small</li>
					<li id="med" name="layers" onclick="layers(this)">Medium</li>
					<li id="lar" name="layers" onclick="layers(this)">Large</li>
					<li id="smallMedium" name="layers" onclick="layers(this)">Small Medium</li>
					<li id="mediumLarge" name="layers" onclick="layers(this)">Medium Large</li>
					<li id="triple" name="layers" onclick="layers(this)">Triple Leaf</li>
				</ul>
			</nav>
			<br/><br/>
		</section>
		<main>
			<section id="colors">
				<div id="large" style="display:none;">
					Large Layer: <span id="lSelected" class="selectedName"></span>
						<br/><br/>
						<div class="colorOptions">
							<img id="lsalmon" class="large" value="salmonBasketweave" name="Salmon Basketweave" src="Colors/salmonBasketweave.jpg" onclick="tryIt(this)"/>
							<img id="lwhite" class="large" value="whiteCork" name="White Cork" src="Colors/whiteCork.jpg" onclick="tryIt(this)"/>
							<img id="lraspberry" class="large" value="distressedRaspberry" name="Distressed Raspberry" src="Colors/distressedRaspberry.jpg" onclick="tryIt(this)"/>
							<img id="lspruce" class="large" value="spruceGreenCork" name="Spruce Green Cork" src="Colors/spruceGreenCork.jpg" onclick="tryIt(this)"/>
							<img id="lblossom" class="large" value="blossom" name="Blossom" src="Colors/blossom.jpg" onclick="tryIt(this)"/>
							<img id="lleopard" class="large" value="leopard" name="Leopard" src="Colors/leopard.jpg" onclick="tryIt(this)"/>
							<img id="lgold" class="large" value="gold" name="Gold" src="Colors/gold.jpg" onclick="tryIt(this)"/>
							<img id="laqua" class="large" value="aquaCork" name="Aqua Cork" src="Colors/aquaCork.jpg" onclick="tryIt(this)"/>
							<img id="lrose" class="large" value="roseGoldBraid" name="Rose Gold Braid" src="Colors/roseGoldBraid.jpg" onclick="tryIt(this)"/>
							<img id="lnavy" class="large" value="navyCorduroy" name="Navy Corduroy" src="Colors/navyCorduroy.jpg" onclick="tryIt(this)"/>
							<img id="lblack" class="large" value="blackCork" name="Black Cork" src="Colors/blackCork.jpg" onclick="tryIt(this)"/>
							<img id="lselenite" class="large" value="selenite" name="Selenite" src="Colors/selenite.jpg" onclick="tryIt(this)"/>
							<img id="lbrandy" class="large" value="brandySaddle" name="Brandy Saddle" src="Colors/brandySaddle.jpg" onclick="tryIt(this)"/>
							<img id="lbw" class="large" value="blackAndWhiteStripes" name="Black and White Stripes" src="Colors/blackAndWhiteStripes.jpg" onclick="tryIt(this)"/>
							<img id="llavendar" class="large" value="lavenderFrost" name="Lavender Frost" src="Colors/lavenderFrost.jpg" onclick="tryIt(this)"/>
							<img id="lmustard" class="large" value="mustardChevron" name="Mustard Chevron" src="Colors/mustardChevron.jpg" onclick="tryIt(this)"/>
							<img id="lemblem" class="large" value="emblem" name="Emblem - May Promo" src="Colors/emblem.jpg" onclick="tryIt(this)"/>
							<img id="lcarmine" class="large" value="carmine" name="Carmin - May Promo" src="Colors/carmine.jpg" onclick="tryIt(this)"/>
							<img id="lbluesette" class="large" value="bluesette" name="Bluesette - May Promo" src="Colors/bluesette.jpg" onclick="tryIt(this)"/>
						</div>
				</div>
				
				<div id="medium" style="display:none;">
					Medium Layer: <span id="mSelected" class="selectedName"></span>
					<br/><br/>
					<div class="colorOptions">
						<img id="msalmon" class="medium" value="salmonBasketweave" name="Salmon Basketweave" src="Colors/salmonBasketweave.jpg" onclick="tryIt2(this)"/>
						<img id="mwhite" class="medium" value="whiteCork" name="White Cork" src="Colors/whiteCork.jpg" onclick="tryIt2(this)"/>
						<img id="mraspberry" class="medium" value="distressedRaspberry" name="Distressed Raspberry" src="Colors/distressedRaspberry.jpg" onclick="tryIt2(this)"/>
						<img id="mspruce" class="medium" value="spruceGreenCork" name="Spruce Green Cork" src="Colors/spruceGreenCork.jpg" onclick="tryIt2(this)"/>
						<img id="mblossom" class="medium" value="blossom" name="Blossom" src="Colors/blossom.jpg" onclick="tryIt2(this)"/>
						<img id="mleopard" class="medium" value="leopard" name="Leopard" src="Colors/leopard.jpg" onclick="tryIt2(this)"/>
						<img id="mgold" class="medium" value="gold" name="Gold" src="Colors/gold.jpg" onclick="tryIt2(this)"/>
						<img id="maqua" class="medium" value="aquaCork" name="Aqua Cork" src="Colors/aquaCork.jpg" onclick="tryIt2(this)"/>
						<img id="mrose" class="medium" value="roseGoldBraid" name="Rose Gold Braid" src="Colors/roseGoldBraid.jpg" onclick="tryIt2(this)"/>
						<img id="mnavy" class="medium" value="navyCorduroy" name="Navy Corduroy" src="Colors/navyCorduroy.jpg" onclick="tryIt2(this)"/>
						<img id="mblack" class="medium" value="blackCork" name="Black Cork" src="Colors/blackCork.jpg" onclick="tryIt2(this)"/>
						<img id="mselenite" class="medium" value="selenite" name="Selenite" src="Colors/selenite.jpg" onclick="tryIt2(this)"/>
						<img id="mbrandy" class="medium" value="brandySaddle" name="Brandy Saddle" src="Colors/brandySaddle.jpg" onclick="tryIt2(this)"/>
						<img id="mbw" class="medium" value="blackAndWhiteStripes" name="Black and White Stripes" src="Colors/blackAndWhiteStripes.jpg" onclick="tryIt2(this)"/>
						<img id="mlavendar" class="medium" value="lavenderFrost" name="Lavender Frost" src="Colors/lavenderFrost.jpg" onclick="tryIt2(this)"/>
						<img id="mmustard" class="medium" value="mustardChevron" name="Mustard Chevron" src="Colors/mustardChevron.jpg" onclick="tryIt2(this)"/>
						<img id="memblem" class="medium" value="emblem" name="Emblem - May Promo" src="Colors/emblem.jpg" onclick="tryIt2(this)"/>
						<img id="mcarmine" class="medium" value="carmine" name="Carmin - May Promo" src="Colors/carmine.jpg" onclick="tryIt2(this)"/>
						<img id="mbluesette" class="medium" value="bluesette" name="Bluesette - May Promo" src="Colors/bluesette.jpg" onclick="tryIt2(this)"/>
					</div>
				</div>
				
				<div id="small" style="display:none;">
					Small Layer: <span id="sSelected" class="selectedName"></span>
					<br/><br/>
					<div class="colorOptions">
						<img id="ssalmon" class="small" value="salmonBasketweave" name="Salmon Basketweave" src="Colors/salmonBasketweave.jpg" onclick="tryIt3(this)"/>
						<img id="swhite" class="small" value="whiteCork" name="White Cork" src="Colors/whiteCork.jpg" onclick="tryIt3(this)"/>
						<img id="sraspberry" class="small" value="distressedRaspberry" name="Distressed Raspberry" src="Colors/distressedRaspberry.jpg" onclick="tryIt3(this)"/>
						<img id="sspruce" class="small" value="spruceGreenCork" name="Spruce Green Cork" src="Colors/spruceGreenCork.jpg" onclick="tryIt3(this)"/>
						<img id="sblossom" class="small" value="blossom" name="Blossom" src="Colors/blossom.jpg" onclick="tryIt3(this)"/>
						<img id="sleopard" class="small" value="leopard" name="Leopard" src="Colors/leopard.jpg" onclick="tryIt3(this)"/>
						<img id="sgold" class="small" value="gold" name="Gold" src="Colors/gold.jpg" onclick="tryIt3(this)"/>
						<img id="saqua" class="small" value="aquaCork" name="Aqua Cork" src="Colors/aquaCork.jpg" onclick="tryIt3(this)"/>
						<img id="srose" class="small" value="roseGoldBraid" name="Rose Gold Braid" src="Colors/roseGoldBraid.jpg" onclick="tryIt3(this)"/>
						<img id="snavy" class="small" value="navyCorduroy" name="Navy Corduroy" src="Colors/navyCorduroy.jpg" onclick="tryIt3(this)"/>
						<img id="sblack" class="small" value="blackCork" name="Black Cork" src="Colors/blackCork.jpg" onclick="tryIt3(this)"/>
						<img id="sselenite" class="small" value="selenite" name="Selenite" src="Colors/selenite.jpg" onclick="tryIt3(this)"/>
						<img id="sbrandy" class="small" value="brandySaddle" name="Brandy Saddle" src="Colors/brandySaddle.jpg" onclick="tryIt3(this)"/>
						<img id="sbw" class="small" value="blackAndWhiteStripes" name="Black and White Stripes" src="Colors/blackAndWhiteStripes.jpg" onclick="tryIt3(this)"/>
						<img id="slavendar" class="small" value="lavenderFrost" name="Lavender Frost" src="Colors/lavenderFrost.jpg" onclick="tryIt3(this)"/>
						<img id="smustard" class="small" value="mustardChevron" name="Mustard Chevron" src="Colors/mustardChevron.jpg" onclick="tryIt3(this)"/>
						<img id="semblem" class="small" value="emblem" name="Emblem - May Promo" src="Colors/emblem.jpg" onclick="tryIt3(this)"/>
						<img id="scarmine" class="small" value="carmine" name="Carmin - May Promo" src="Colors/carmine.jpg" onclick="tryIt3(this)"/>
						<img id="sbluesette" class="small" value="bluesette" name="Bluesette - May Promo" src="Colors/bluesette.jpg" onclick="tryIt3(this)"/>
					</div>
						
				</div>
			</section>
			<section id="mockup">
				<?php
					if (type == "Leaf"){
						<?php include 'leafShape.php'; ?>
					}
				?>
			</section>
		</main>
	</body>

<?php include 'footer.php'; ?>


