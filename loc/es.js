module.exports = {
  wallets: {
    list: {
      tabBarLabel: 'Monederos',
      app_name: 'Blue Wallet',
      title: 'Mi Monederos de Bitcoin',
      header:
        'Un Monedero esta representado con secreto (clave privada) y una dirección' +
        'que puedes compartir para recibir monedas.',
      add: 'Añadir Monedero',
    },
    add: {
      title: 'Añadir Monedero',
      description:
        'Puedes escanear el monedero de papel (en WIF - Formato de importación de monederos) o crear un nuevo monedero. Monederos segwit estan compatibles por defecto.',
      scan: 'Escaniar',
      create: 'Crear',
      label_new_segwit: 'Nuevo SegWit',
    },
    details: {
      title: 'Detalles del Monedero',
      address: 'Dirección',
      type: 'Tipo',
      label: 'Etiqueta',
      are_you_sure: 'Estas seguro?',
      yes_delete: 'Si, eliminar',
      no_cancel: 'No, cancelar',
      delete_this_wallet: 'Eliminar eso Monedero',
      export_backup: 'Exportar / guardar',
    },
    export: {
      title: 'Exportacion de Monedero',
    },
    scanQrWif: {
      go_back: 'Regresar',
      cancel: 'Cancelar',
      decoding: 'Descodificación',
      input_password: 'Ingrese su contraseña',
      password_explain: 'Eso es BIP38 clave privada encriptada',
      bad_password: 'Mal contraseña',
      wallet_already_exists: 'Eso monedero ya existe',
      bad_wif: 'Mal WIF',
      imported_wif: 'Importado WIF ',
      with_address: ' con  dirección ',
      imported_segwit: 'Importado SegWit',
      imported_legacy: 'Importado Legado',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transacciónes',
      title: 'Mi Transacciónes',
      description:
        'Una lista de las transacciones entrantes o salientes de sus monederos',
      conf: 'conf',
    },
    details: {
      title: 'Detalles de Transaccion',
      from: 'De',
      to: 'A',
    },
  },
  send: {
    list: {
      tabBarLabel: 'Enviar',
      header: 'Elige monedero',
    },
    details: {
      title: 'Crear Transaccion',
      amount_fiels_is_not_valid: 'La cantidad no es válida',
      fee_fiels_is_not_valid: 'La tasa no es válida',
      address_fiels_is_not_valid: 'La dirección no es válida',
      receiver_placeholder: 'La dirección de recipiente',
      amount_placeholder: 'cantidad para enviar (in BTC)',
      fee_placeholder: 'más tasa de transaccion (in BTC)',
      memo_placeholder: 'comentario (para ti mismo)',
      cancel: 'Cancelar',
      scan: 'Escaniar',
      create: 'Crear',
      remaining_balance: 'Balance disponible',
    },
    create: {
      title: 'Crear una Transaccion',
      error:
        'Error al crear una transacción. ¿Dirección o cantidad estan invalidas?',
      go_back: 'Regresar',
      this_is_hex:
        'Este es representacion hex de transacción, firmado y listo para ser transmitido a la red. ¿Continuar?',
      to: 'A',
      amount: 'Cantidad',
      fee: 'Tasa',
      tx_size: 'TX tamaño',
      satoshi_per_byte: 'satoshiPorByte',
      memo: 'Comentario',
      broadcast: 'Transmitir',
    },
  },
  receive: {
    list: {
      tabBarLabel: 'Recivir',
      header: 'Elige el monedero',
    },
    details: {
      title: 'Comparte esta dirección con el pagador',
    },
  },
  settings: {
    tabBarLabel: 'Ajustes',
    header: 'Ajustes',
    plausible_deniability: 'Negación plausible...',
    storage_not_encrypted: 'Almacenamiento: no esta encriptado',
    password: 'Contraseña',
    password_explain:
      'Crea la contraseña que usarás para descifrar el almacenamiento',
    retype_password: 'Ingresa la contraseña de nuevo',
    passwords_do_not_match: 'Contraseñas deben ser iguales',
    encrypt_storage: 'Cifrar almacenamiento',
    about: 'Sobre nosotros',
  },
};
