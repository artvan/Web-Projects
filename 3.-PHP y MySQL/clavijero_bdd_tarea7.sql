-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2016 a las 08:20:28
-- Versión del servidor: 5.7.9
-- Versión de PHP: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clavijero_bdd_tarea7`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `Matricula` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Dir` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Grupo` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `Promedio` double NOT NULL,
  `Edad` int(11) NOT NULL,
  `Sexo` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Matricula`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`Matricula`, `Nombre`, `Dir`, `Grupo`, `Promedio`, `Edad`, `Sexo`) VALUES
(1, 'Selene Aguirre', 'Las Palmas 34', 'A', 8.5, 19, 'F'),
(2, 'Martin Porres', 'Blvd. Lopez Mateos', 'B', 9, 20, 'M'),
(3, 'Miriam Gutiérrez', 'Águila 34', 'A', 7, 21, 'F'),
(4, 'Benito López', 'Rueda 23', 'B', 10, 19, 'M'),
(5, 'Victor Pérez', 'Carlos Carrillo 567', 'B', 8, 20, 'M'),
(6, 'Nicolás Rosas', '20 de Nov. 123', 'C', 10, 22, 'M');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
