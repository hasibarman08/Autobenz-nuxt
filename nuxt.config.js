export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'shortcut icon', type: 'image/x-icon', href: 'img/logo/favicon.ico' },
			// External CSS libraries
			{ rel: 'stylesheet', href: 'css/bootstrap.min.css' },
			{ rel: 'stylesheet', href: 'css/animate.min.css' },
			{ rel: 'stylesheet', href: 'css/bootstrap-submenu.css' },
			{ rel: 'stylesheet', href: 'css/bootstrap-select.min.css' },
			{ rel: 'stylesheet', href: 'css/magnific-popup.css' },
			{ rel: 'stylesheet', href: 'css/leaflet.css' },
			{ rel: 'stylesheet', href: 'css/map.css' },
			{ rel: 'stylesheet', href: 'fonts/font-awesome/css/font-awesome.min.css' },
			{ rel: 'stylesheet', href: 'fonts/flaticon/font/flaticon.css' },
			{ rel: 'stylesheet', href: 'fonts/linearicons/style.css' },
			{ rel: 'stylesheet', href: 'css/jquery.mCustomScrollbar.css' },
			{ rel: 'stylesheet', href: 'css/dropzone.css' },
			{ rel: 'stylesheet', href: 'css/lightbox.min.css' },
			{ rel: 'stylesheet', href: 'css/jnoty.css' },
			{ rel: 'stylesheet', href: 'css/slick.css' },
			{ rel: 'stylesheet', href: 'css/slick-theme.css' },

			// Custom stylesheet

			{ rel: 'stylesheet', href: 'css/preloader.css' },
			{ rel: 'stylesheet', href: 'css/downloads.css' },
			{ rel: 'stylesheet', href: 'css/sidebar.css' },
			{ rel: 'stylesheet', href: 'css/style.css' },
			{ rel: 'stylesheet', href: 'css/responsive.css' },
			{ rel: 'stylesheet', href: 'css/initial.css' },
			{ rel: 'stylesheet', href: 'css/skins/midnight-blue.css' },
			{ rel: 'stylesheet', href: 'css/ie10-viewport-bug-workaround.css' },
			{ rel: 'stylesheet', href: 'css/initial.css' },
			{ rel: 'stylesheet', href: 'css/original/themify-icons.css' },
			// Google fonts
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700%7CUbuntu:300,400,700'
			},
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,300,700' }
		],
		script: [
			{ src: 'js/jquery/jquery.min.js' },
			{ src: 'js/popper.min.js' },
			{ src: 'js/bootstrap.bundle.min.js' },
			{ src: 'js/bootstrap-submenu.js' },
			{ src: 'js/rangeslider.js' },
			{ src: 'js/jquery/jquery.mb.YTPlayer.js' },
			{ src: 'js/bootstrap-select.min.js' },
			{ src: 'js/jquery/jquery.easing.1.3.js' },
			{ src: 'js/jquery/jquery.scrollUp.js' },
			{ src: 'js/jquery/jquery.mCustomScrollbar.concat.min.js' },
			{ src: 'js/leaflet.js' },
			{ src: 'js/leaflet-providers.js' },
			{ src: 'js/leaflet.markercluster.js' },
			{ src: 'js/dropzone.js' },
			{ src: 'js/slick.min.js' },
			{ src: 'js/jquery/jquery.filterizr.js' },
			{ src: 'js/jquery/jquery.magnific-popup.min.js' },
			{ src: 'js/jquery/jquery.countdown.js' },
			{ src: 'js/jquery/jquery.mousewheel.min.js' },
			{ src: 'js/jquery/jquery.nicescroll.min.js' },
			{ src: 'js/lightgallery-all.js' },
			{ src: 'js/wow.min.js' },
			{ src: 'js/jnoty.js' },
			{ src: 'js/maps.js' },
			{ src: 'js/sidebar.js' },

			{ src: 'js/html5shiv.min.js' },
			{ src: 'js/ie-emulation-modes-warning.js' },
			{ src: 'js/ie8-responsive-file-warning.js' },
			{ src: 'js/ie10-viewport-bug-workaround.js' },
			{ src: 'js/vendor/theme-dist.js' },

			{ src: 'js/jquery.counterup.min.js' },
			{ src: 'js/waypoints.js' },
			{ src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCtMppSKGQ-L-nnZFMFJNwwzB4iDjXLcZs' },
			{ src: 'js/mapcode.js' }
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [],
	/*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://foxnfox.ch/',
    proxyHeaders: false,
    credentials: false
  },
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
