<template>
	<!-- Credits for the Gameboy CSS goes to Red X at https://www.freecodecamp.com/llredxll -->
    <div class="wrapper">
		<b-col md="6" class="mx-auto">
			<b-card header="Sobre" border-variant="info">
				<link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
				<div class="container-fluid">
				<div id="bezel" class="container">
					<hr id="line-top">
					<hr id="line-btm">
						<div class="container">
						<div class="row">
							<div id="power-led" class=" col-lg-1 col-md-1 col-sm-1"><i class="fa fa-circle" aria-hidden="true"></i>
							</div><!-- Power LED -->
							<div id="screen" class="col-lg-10 col-md-10 col-sm-10">
							<div class='quote-text'>
								<span>Sistema desenvolvido pelo Engenheiro de Computação Nikolas Vago Serafini,
									no intuito de facilitar o controle de serviços das empresas de Marcos Alvany Vago.
								</span>
								<p>
									<span>
										Para qualquer dúvida, bug ou esclarecimento, entrar em contato no e-mail: <strong>nikolas.serafini@gmail.com</strong>
									</span>
								</p>
							</div>
							<div class='quote-author'></div><!-- Randome Quote -->
							</div> <!-- screen -->
						</div><!-- Screen and power led -->
						</div><!-- inner container -->
						<p id="credit" class="text-center"><strong>Nintendo Gameboy</strong>
						</p>
				</div><!---Bezel Container -->
				<!-- Buttons -->
				</div><!---Main gb body/container -->
        	</b-card>
		</b-col>
    </div>
</template>

<style>
a {
  color:#45464e;
}

a:hover {
  color:#8B163F;
  text-decoration:none;
}

#bezel {
  margin-bottom:50px;
  border-radius: 15px 15px 65px 15px; 
  padding:5px 25px 15px 15px;
  background-color:#666874;
  width:400px;
}

#credit {
  padding:25px 0px 0px 0px;
  line-height:0px;
  color:#45464e;
}

#line-top {
  background-color:#8B163F;
  height:1px;
  margin:15px 0px 5px 10px;
}

#line-btm {
  background-color:#0c0b44;
  height:1px;
  margin:8px 0px 15px 10px;
}

#power-led {
  color:#f40000;
  text-shadow: 0 0 10px #FE0000;
  text-align:center;
  padding: 75px 10px 0px 0px;
}

#screen {
  margin:5px;
  height: auto;
  min-height:250px;
  background-color:#8BAC0F;
  padding:25px 25px 0px 25px;
}

.quote-text {
  color:#306230;
  font-family: 'VT323', monospace;
  font-size:1.212em	;
  
}

.quote-author {
  color:#306230;
  font-family: 'VT323', monospace;
  padding-top:10px;
}

.btns {
  position:relative;
  top:25px;
  left:100px;
  width: 155px;
  transform: rotate(-35deg);
  margin: 0 auto;
}

.round-btn {
  width:60px;
  height:60px;
  border-radius:50%;
  background-color:#8B163F;
  margin-left:10px;
}

#tweet {
  color:#490f23;
  transform: rotate(35deg);
}

#quote {
  color:#490f23;
  transform: rotate(35deg);
}
</style>
