#include <BLEDevice.h>
#include <BLEClient.h>
#include <BLEUtils.h>
#include "SimpleBLE.h"

// サービスとキャラクタリスティックのUUID
#define SERVICE_UUID "4fafc2xx-1fb5-459e-8fcc-c5c9c33191xx"
#define CHARACTERISTIC_UUID "beb548xx-36e1-4688-b7f5-ea07361b26xx"

// サーバーのMACアドレス（受信側Arduinoのアドレス）
#define SERVER_MAC "48:27:e2:e0:1d:ad" // 実際のMACアドレスに置き換える

BLEClient* pClient;
BLERemoteCharacteristic* pRemoteCharacteristic;

SimpleBLE ble;

// 接続処理
bool connectToServer(const char* serverMacAddress) {
  BLEDevice::init("");
  pClient = BLEDevice::createClient();

  // サーバーのBLEアドレスを設定
  BLEAddress serverAddress(serverMacAddress);

  // BLEサーバーに接続
  if (pClient->connect(serverAddress)) {
    Serial.println("サーバーに接続しました");
    return true;
  }
  return false;
}

void setup() {
  Serial.begin(115200);
  Serial.println("BLEクライアントの起動...");

  // サーバーに接続
  if (!connectToServer(SERVER_MAC)) {
    Serial.println("接続に失敗しました。再起動してください。");
    while (1);
  }

  delay(3000);

  Serial.println("接続を切断しました。シンプルBLEを起動します。");
  String out = "BLE32 name: ";
  ble.begin(out);
}

void loop() {
}