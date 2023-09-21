    window.sodium = {
      onload: function (sodium) {
        let h = sodium.crypto_generichash(64, sodium.from_string('test'));
      }
    };

    function sodiumEncrypt(v,k) {
      return sodium.to_base64(sodium.crypto_box_seal(v, sodium.from_base64(k)));
    }
