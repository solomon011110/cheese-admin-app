SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

USE mydatabase;

CREATE TABLE beacons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    Registration_date DATE NOT NULL
);

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(10),
    age DATE,
    beacon_pieces INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(10),
    age DATE,
    start_date DATE NOT NULL,
    end_date DATE NULL
);

CREATE TABLE parent_child (
    parent_id INT NOT NULL,
    child_id INT NOT NULL,
    Registration_date DATE NOT NULL,
    FOREIGN KEY (parent_id) REFERENCES users(id),
    FOREIGN KEY (child_id) REFERENCES users(id),
    PRIMARY KEY(parent_id, child_id)
);

CREATE TABLE admin_beacon (
    admin_id INT NOT NULL,
    beacon_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES admins(id),
    FOREIGN KEY (beacon_id) REFERENCES beacons(id),
    PRIMARY KEY(admin_id, beacon_id)
);

INSERT INTO users (id, name, mail, password, number, gender, age, start_date, end_date) VALUES
(1, 'User_1', 'sorasion1205@gmail.com', '66282d346e9df4924b7c5b9791cdfe09f983e62cfaefd5e1e866bb7f6d07ee70', '090-4836-1230', 'male', '2002/12/5', '2024/9/1', NULL);

INSERT INTO admins (id, name, mail, password, number, gender, age, beacon_pieces, start_date, end_date) VALUES
(1, 'Admin_1', 'sorasion1205@gmail.com', '66282d346e9df4924b7c5b9791cdfe09f983e62cfaefd5e1e866bb7f6d07ee70', '090-4836-1230', 'male', '2002/12/5', 4, '2015/1/1', NULL);

INSERT INTO beacons (id, name, Registration_date) VALUES
(1, 'Beaconversion 1.3.1', '2010/8/8'),
(2, 'Beaconversion 1.3.1', '2010/8/8'),
(3, 'Beaconversion 1.3.1', '2010/8/8'),
(4, 'Beaconversion 1.3.1', '2010/8/8'),
(5, 'Beaconversion 1.3.1', '2010/8/8'),
(6, 'Beaconversion 1.3.1', '2010/8/8'),
(7, 'Beaconversion 1.3.1', '2010/8/8'),
(8, 'Beaconversion 1.3.1', '2010/8/8'),
(9, 'Beaconversion 1.3.1', '2010/8/8'),
(10, 'Beaconversion 1.3.1', '2010/8/8'),
(11, 'Beaconversion 1.3.1', '2010/8/8'),
(12, 'Beaconversion 1.3.1', '2010/8/8'),
(13, 'Beaconversion 1.3.1', '2010/8/8'),
(14, 'Beaconversion 1.3.1', '2010/8/8'),
(15, 'Beaconversion 1.3.1', '2010/8/8'),
(16, 'Beaconversion 1.3.1', '2010/8/8'),
(17, 'Beaconversion 1.3.1', '2010/8/8'),
(18, 'Beaconversion 1.3.1', '2010/8/8'),
(19, 'Beaconversion 1.3.1', '2010/8/8'),
(20, 'Beaconversion 1.3.1', '2010/8/8'),
(21, 'Beaconversion 3.0', '2025/7/1'),
(22, 'Beaconversion 3.0', '2025/7/1'),
(23, 'Beaconversion 3.0', '2025/7/1'),
(24, 'Beaconversion 3.0', '2025/7/1'),
(25, 'Beaconversion 3.0', '2025/7/1'),
(26, 'Beaconversion 3.0', '2025/7/1'),
(27, 'Beaconversion 3.0', '2025/7/1'),
(28, 'Beaconversion 3.0', '2025/7/1'),
(29, 'Beaconversion 3.0', '2025/7/1'),
(30, 'Beaconversion 3.0', '2025/7/1');

INSERT INTO admin_beacon (admin_id, beacon_id, order_date) VALUES
(1, 1, '2025/1/1'),
(1, 2, '2025/1/1'),
(1, 3, '2025/1/1'),
(1, 4, '2025/1/1');