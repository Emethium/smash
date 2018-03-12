<template>
    <div class="wrapper">
        <b-card header="Sobre" border-variant="info">
          <p class="mx-auto">
            Sistema desenvolvido com o intuito de facilitar o manejamento de serviços e empresas do Engenheiro Marcos Alvany Vago.
          </p>
          <p class="mx-auto">
            Para qualquer dúvida, bug ou esclarecimento, entrar em contato no e-mail: <strong>nikolas.serafini@gmail.com</strong>
          </p> 
          <div class="mx-auto">
            <div class="menu-toggle">
                <div class="icon">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
            </div> 
          </div>
        </b-card>
    </div>
</template>

<style lang="scss">
$size: 100px;
$default-color: #7f8c8d;
$hover-color: #2980b9;

* {
	margin: 0;
	padding: 0;
	color: inherit;
	box-sizing: inherit;

	&:focus {
		outline: none;
	}
}

html {
	box-sizing: border-box;
}

body {
	// background-color: #ecf0f1;
	font-family: 'Open Sans', sans-serif;
	overflow: hidden;
}

.animate {
	transition: all 0.3s cubic-bezier(0.310, -0.105, 0.430, 1.590);
}

.menu-toggle {
	width: $size;
	height: $size;
	margin: auto;
	cursor: pointer;
	position: relative;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	@extend .animate;
	
	&:before,
	&:after {
		height: $size;
		line-height: $size;
		margin-right: 30px;
		padding-right: 100%;
		font-weight: 600;
		font-size: 25px;
		position: absolute;
		top: 0;
		right: 0;
		@extend .animate;
	}
	
	&:before {
		content: 'Nikolas';
		color: $default-color;
		transform: rotate(0deg);
	}
	
	&:after {
		content: 'Software';
		color: $hover-color;
		opacity: 0;
		transform: rotate(-45deg);
	}
	
	.icon {
		width: $size;
		height: $size;
		position: relative;
		top: 0;
		right: 0;
		@extend .animate;

		.square {
			background-color: $default-color;
			width: 24%;
			height: 24%;
			position: absolute;
			@extend .animate;

			&:nth-child(1) {
				top: 0;
				left: 0;
			}

			&:nth-child(2) {
				top: 0;
				left: 38%;
			}

			&:nth-child(3) {
				top: 0;
				left: 76%;
			}

			&:nth-child(4) {
				top: 38%;
				left: 0;
			}

			&:nth-child(5) {
				top: 38%;
				left: 38%;
			}

			&:nth-child(6) {
				top: 38%;
				left: 76%;
			}

			&:nth-child(7) {
				top: 76%;
				left: 0;
			}

			&:nth-child(8) {
				top: 76%;
				left: 38%;
			}

			&:nth-child(9) {
				top: 76%;
				left: 76%;
			}
		}
	}

	&:hover {
		
		&:before {
			opacity: 0;
			transform: rotate(45deg);
		}
		
		&:after {
			opacity: 1;
			transform: rotate(0deg);
		}
		
		.icon {
			transform: rotate(45deg);

			.square {
				background-color: $hover-color;

				&:nth-child(1),
				&:nth-child(3),
				&:nth-child(7),
				&:nth-child(9) {
					opacity: 0;	
				}
			}
		}
	}
	
	&:active {
		opacity: .8;
	}
}
</style>


<script>
export default {

}
</script>
