/**
* db.sql
*
* Customer database schema and seed data for the project
*/

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255),
  `country` varchar(100) NOT NULL DEFAULT 'India',
  `phone` bigint NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

INSERT INTO `customer`(name, address, phone) VALUES
  ('Customer 1', '#1 Nice Apartments, 5th cross, Bengaluru 560001', 9876543210),
  ('Customer 2', '#2 Nice Apartments, 5th cross, Bengaluru 560001', 1234567890),
  ('Customer 3', '#3 Nice Apartments, 5th cross, Bengaluru 560001', 9876543210),
  ('Customer 4', '#4 Nice Apartments, 5th cross, Bengaluru 560001', 1234567890),
  ('Customer 5', '#5 Nice Apartments, 5th cross, Bengaluru 560001', 9876543210),
  ('Customer 6', '#6 Nice Apartments, 5th cross, Bengaluru 560001', 1234567890),
  ('Customer 7', '#7 Nice Apartments, 5th cross, Bengaluru 560001', 9876543210),
  ('Customer 8', '#8 Nice Apartments, 5th cross, Bengaluru 560001', 1234567890),
  ('Customer 9', '#9 Nice Apartments, 5th cross, Bengaluru 560001', 9876543210),
  ('Customer 10', '#10 Nice Apartments, 5th cross, Bengaluru 560001', 1234567890),
  ('Customer 11', '#11 Nice Apartments, 5th cross, Bengaluru 560001', 9876543210),
  ('Customer 12', '#12 Nice Apartments, 5th cross, Bengaluru 560001', 1234567890),
  ('Customer 13', '#13 Nice Apartments, 5th cross, Bengaluru 560001', 9876543210),
  ('Customer 14', '#14 Nice Apartments, 5th cross, Bengaluru 560001', 1234567890),
  ('Customer 15', '#15 Nice Apartments, 5th cross, Bengaluru 560001', 9876543210);
