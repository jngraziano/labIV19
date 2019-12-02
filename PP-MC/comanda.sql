-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2018 a las 13:49:43
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comanda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `usuario` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `clave` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `fechaRegistro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ultimoLogin` datetime NOT NULL,
  `perfil` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `estado` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `operaciones` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `usuario`, `clave`, `fechaRegistro`, `ultimoLogin`, `perfil`, `estado`, `operaciones`) VALUES
(1, 'Ariel', 'ariel', '12345', '2018-11-19 15:42:46', '2018-12-05 09:47:51', 'socio', 'H', 47),
(2, 'Ivan', 'ivan', '12345', '2018-11-19 16:39:55', '0000-00-00 00:00:00', 'mozo', 'H', 0),
(3, 'Fernando', 'fernando', '12345', '2018-11-19 16:42:37', '2018-11-19 13:42:55', 'mozo', 'B', 0),
(4, 'Damian', 'damian', '12345', '2018-11-19 17:03:40', '2018-12-02 23:17:19', 'mozo', 'H', 192),
(5, 'Angel', 'angel', '12345', '2018-11-19 19:39:49', '2018-12-02 23:18:31', 'bartender', 'H', 0),
(6, 'Mariano', 'mariano', '12345', '2018-11-19 19:40:15', '0000-00-00 00:00:00', 'cervecero', 'S', 0),
(7, 'Maximiliano', 'maxi', '12345', '2018-11-19 19:40:29', '2018-11-19 19:49:35', 'cocinero', 'H', 32),
(8, 'Rodrigo', 'rodrigo', '12345', '2018-11-19 19:40:52', '2018-12-03 21:57:24', 'cocinero', 'H', 4),
(9, 'Mario', 'mario', '12345', '2018-11-19 19:41:08', '0000-00-00 00:00:00', 'bartender', 'H', 0),
(10, 'Paula', 'paula', '12345', '2018-11-19 19:41:21', '0000-00-00 00:00:00', 'cervecero', 'H', 0),
(11, 'Alejandra', 'Ale', '12345', '2018-11-20 19:43:05', '0000-00-00 00:00:00', 'socio', 'H', 0),
(13, 'Mario', 'Campi', '12345', '2018-12-04 22:01:55', '0000-00-00 00:00:00', 'mozo', 'H', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuesta`
--

CREATE TABLE `encuesta` (
  `id` int(11) NOT NULL,
  `puntuacion_mesa` int(11) NOT NULL,
  `codigoMesa` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `puntuacion_restaurante` int(11) NOT NULL,
  `puntuacion_mozo` int(11) NOT NULL,
  `puntuacion_cocinero` int(11) NOT NULL,
  `comentario` text COLLATE utf8_unicode_ci NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `encuesta`
--

INSERT INTO `encuesta` (`id`, `puntuacion_mesa`, `codigoMesa`, `puntuacion_restaurante`, `puntuacion_mozo`, `puntuacion_cocinero`, `comentario`, `fecha`) VALUES
(1, 10, 'mesa01', 10, 9, 8, 'Muy buena atencion y comida.', '2018-12-04'),
(2, 1, 'mesa02', 4, 1, 4, 'Un desastre la mesa.', '2018-12-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id` int(11) NOT NULL,
  `importe` float NOT NULL,
  `codigoMesa` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `importe`, `codigoMesa`, `fecha`) VALUES
(1, 150, 'mesa02', '2018-12-03'),
(5, 200, 'mesa03', '2018-12-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesa`
--

CREATE TABLE `mesa` (
  `codigo` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `estado` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `foto` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `mesa`
--

INSERT INTO `mesa` (`codigo`, `estado`, `foto`) VALUES
('mesa01', 'Cerrada', ''),
('mesa02', 'Con cliente esperando pedido', ''),
('mesa03', 'Con cliente pagando', ''),
('mesa04', 'Cerrada', './fotos/mesa04.png'),
('mesa05', 'Cerrada', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `codigo` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `hora_pedido` time NOT NULL,
  `hora_entrega_estimada` time NOT NULL,
  `hora_entrega` time NOT NULL,
  `id_mesa` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `pedido` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `importe` float NOT NULL,
  `mozo` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_cliente` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `estadoPedido` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `sector` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `encargado_pedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`codigo`, `fecha`, `hora_pedido`, `hora_entrega_estimada`, `hora_entrega`, `id_mesa`, `pedido`, `cantidad`, `importe`, `mozo`, `nombre_cliente`, `estadoPedido`, `sector`, `encargado_pedido`) VALUES
('47cbh', '2018-12-02', '20:02:00', '20:51:00', '20:55:00', 'mesa02', 'Vino', 1, 150, 'Jose', 'Juan Perez', 'Servido', 'entrada', 7),
('6refe', '2018-12-03', '19:06:00', '00:00:00', '00:00:00', 'mesa02', 'Pizza', 1, 150, 'Jose', 'Juan Perez', 'Pendiente', 'cocina', 0),
('cfw84', '2018-12-04', '19:54:00', '20:00:00', '19:57:00', 'mesa03', 'Cerveza', 1, 100, 'Jose', 'Juan Gonzalez', 'Servido', 'barra', 7),
('dkl78', '2018-12-02', '18:30:00', '18:45:00', '00:00:00', 'mesa02', 'Cerveza', 1, 100, 'Jose', 'Juan Gonzalez', 'En preparacion', 'barra', 7),
('hmljp', '2018-12-04', '19:54:00', '20:03:00', '19:58:00', 'mesa03', 'Pizza', 2, 100, 'Jose', 'Juan Gonzalez', 'Servido', 'cocina', 7),
('pnp7u', '2018-12-02', '19:53:00', '00:00:00', '00:00:00', 'mesa02', 'Pizza', 1, 150, 'Jose', 'Juan Gonzalez', 'Pendiente', 'cocina', 0),
('tb660', '2018-12-04', '15:30:00', '15:55:00', '00:00:00', 'mesa02', 'Empanadas', 2, 80, 'Jose', 'Juan Gonzalez', 'En preparacion', 'cocina', 7),
('td3ac', '2018-12-03', '21:08:00', '21:20:00', '00:00:00', 'mesa02', 'Cerveza', 1, 100, 'Jose', 'Pedro Gomez', 'En preparacion', 'barra', 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `encuesta`
--
ALTER TABLE `encuesta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mesa`
--
ALTER TABLE `mesa`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `encuesta`
--
ALTER TABLE `encuesta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
