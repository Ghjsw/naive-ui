const idID = {
  name: 'id-ID',
  global: {
    undo: 'Membatalkan',
    redo: 'Mem-perbarui',
    confirm: 'Setuju'
  },
  Popconfirm: {
    positiveText: 'Setuju',
    negativeText: 'Batalkan'
  },
  Cascader: {
    placeholder: 'Mohon Pilih',
    loading: 'Memuat',
    loadingRequiredMessage: (label: string): string =>
      `Mohon muat semua ${label}'s turunan sebelum memeriksa.`
  },
  Time: {
    dateFormat: 'dd-MM-yyyy',
    dateTimeFormat: 'dd-MM-yyyy HH:mm:ss'
  },
  DatePicker: {
    yearFormat: 'yyyy',
    monthFormat: 'MMM',
    dayFormat: 'eeeeee',
    clear: 'Bersihkan',
    now: 'Sekarang',
    confirm: 'Setuju',
    selectTime: 'Pilih Waktu',
    selectDate: 'Pilih Tanggal',
    datePlaceholder: 'Pilih Tanggal',
    datetimePlaceholder: 'Pilih Tanggal dan Waktu',
    monthPlaceholder: 'Pilih Bulan',
    startDatePlaceholder: 'Tanggal Mulai',
    endDatePlaceholder: 'Tanggal Selesai',
    startDatetimePlaceholder: 'Tanggal dan Waktu Mulai',
    endDatetimePlaceholder: 'Tanggal dan Waktu Selesai',
    monthBeforeYear: true,
    firstDayOfWeek: 6 as 0 | 1 | 2 | 3 | 4 | 5 | 6,
    today: 'Hari ini'
  },
  DataTable: {
    checkTableAll: 'Pilih semua pada tabel',
    uncheckTableAll: 'Batalkan pilihan semua',
    confirm: 'Setuju',
    clear: 'Bersihkan'
  },
  Transfer: {
    sourceTitle: 'Sumber',
    targetTitle: 'Tujuan'
  },
  Empty: {
    description: 'Tidak ada data'
  },
  Select: {
    placeholder: 'Mohon Pilih'
  },
  TimePicker: {
    placeholder: 'Pilih Waktu',
    positiveText: 'OK',
    negativeText: 'Batalkan',
    now: 'Sekarang'
  },
  Pagination: {
    goto: 'Ke',
    selectionSuffix: 'halaman'
  },
  DynamicTags: {
    add: 'Tambah'
  },
  Log: {
    loading: 'Memuat'
  },
  Input: {
    placeholder: 'Mohon isi'
  },
  InputNumber: {
    placeholder: 'Mohon isi'
  },
  DynamicInput: {
    create: 'Buat baru'
  },
  ThemeEditor: {
    title: 'Tema editor',
    clearAllVars: 'Bersihkan semua variabel',
    clearSearch: 'Bersihkan pencarian',
    filterCompName: 'Saring nama komponen',
    filterVarName: 'Saring nama variabel',
    import: 'Impor',
    export: 'Ekspor',
    restore: 'Setel ulang ke awal'
  }
}

export type NLocale = typeof idID
export default idID
