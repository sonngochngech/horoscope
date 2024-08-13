const dia_chi_diem_co_ban={
    "ty": {
      "can_tang": {
        "quy": 100
      }
    },
    "suu": {
      "can_tang": {
        "ky": 60,
        "quy": 30,
        "tan": 10
      }
    },
    "dan": {
      "can_tang": {
        "giap": 60,
        "binh": 30,
        "mau": 10
      }
    },
    "mao": {
      "can_tang": {
        "at": 100
      }
    },
    "thin": {
      "can_tang": {
        "mau": 60,
        "at": 30,
        "quy": 10
      }
    },
    "ty_2": {  // Tỵ và Tý trùng key, đổi tên Tỵ thành "ty_2"
      "can_tang": {
        "binh": 60,
        "mau": 30,
        "canh": 10
      }
    },
    "ngo": {
      "can_tang": {
        "dinh": 70,
        "ky": 30
      }
    },
    "mui": {
      "can_tang": {
        "ky": 60,
        "dinh": 30,
        "at": 10
      }
    },
    "than": {
      "can_tang": {
        "canh": 60,
        "nham": 30,
        "mau": 10
      }
    },
    "dau": {
      "can_tang": {
        "tan": 100
      }
    },
    "tuat": {
      "can_tang": {
        "mau": 60,
        "tan": 30,
        "dinh": 10
      }
    },
    "hoi": {
      "can_tang": {
        "nham": 70,
        "giap": 30
      }
    }
}

const thien_can_dai_van={
      "giap": {
        "giap": 100,
        "at": 50,
        "binh": 30,
        "dinh": 20,
        "mau": -50,
        "ky": -30,
        "canh": -20,
        "tan": 0,
        "nham": -20,
        "quy": -30
      },
      "at": {
        "giap": 50,
        "at": 100,
        "binh": 20,
        "dinh": 30,
        "mau": -30,
        "ky": -50,
        "canh": 0,
        "tan": -20,
        "nham": -30,
        "quy": -20
      },
      "binh": {
        "giap": -20,
        "at": -30,
        "binh": 100,
        "dinh": 50,
        "mau": 20,
        "ky": 30,
        "canh": -50,
        "tan": -30,
        "nham": -20,
        "quy": 0
      },
      "dinh": {
        "giap": -30,
        "at": -20,
        "binh": 50,
        "dinh": 100,
        "mau": 30,
        "ky": 20,
        "canh": -30,
        "tan": -50,
        "nham": 0,
        "quy": -20
      },
      "mau": {
        "giap": 0,
        "at": 0,
        "binh": -20,
        "dinh": -30,
        "mau": 100,
        "ky": 50,
        "canh": 20,
        "tan": 30,
        "nham": -50,
        "quy": -30
      },
      "ky": {
        "giap": 0,
        "at": 0,
        "binh": -30,
        "dinh": -20,
        "mau": 50,
        "ky": 100,
        "canh": 30,
        "tan": 20,
        "nham": -30,
        "quy": -50
      },
      "canh": {
        "giap": -50,
        "at": -30,
        "binh": 0,
        "dinh": 0,
        "mau": -20,
        "ky": -30,
        "canh": 100,
        "tan": 50,
        "nham": 20,
        "quy": 30
      },
      "tan": {
        "giap": -30,
        "at": -50,
        "binh": 0,
        "dinh": 0,
        "mau": -30,
        "ky": -20,
        "canh": 50,
        "tan": 100,
        "nham": 30,
        "quy": 20
      },
      "nham": {
        "giap": 20,
        "at": 30,
        "binh": -50,
        "dinh": -30,
        "mau": 0,
        "ky": 0,
        "canh": -20,
        "tan": -30,
        "nham": 100,
        "quy": 50
      },
      "quy": {
        "giap": 30,
        "at": 20,
        "binh": -30,
        "dinh": -50,
        "mau": 0,
        "ky": 0,
        "canh": -30,
        "tan": -20,
        "nham": 50,
        "quy": 100
      }
}

const dia_chi_dai_van={
"ty": {
    "suu": {
        "ky": 0,
        "quy": 100,
        "tan": -20
    },
    "mao": {
        "at": 20
    },
    "thin": {
        "mau": -30,
        "at": 20,
        "quy": 100
    },
    "ngo": {
        "dinh": -50,
        "ky": 0
    },
    "mui": {
        "ky": 0,
        "dinh": -50,
        "at": 20
    },
    "than": {
        "canh": -30,
        "nham": 50,
        "mau": -30
    }
},
"suu": {
    "ty": {
        "quy": -30
    },
    "ty_2": {
        "binh": -40,
        "mau": 40,
        "canh": 30
    },
    "ngo": {
        "dinh": -30,
        "ky": 70
    },
    "mui": {
        "ky": 100,
        "dinh": -30,
        "at": -30
    },
    "dau": {
        "tan": 20
    },
    "tuat": {
        "mau": 40,
        "tan": 30,
        "dinh": -70
    }
},
"dan": {
    "ty_2": {
        "binh": 0,
        "mau": -30,
        "canh": -60
    },
    "ngo": {
        "dinh": 40,
        "ky": -20
    },
    "than": {
        "canh": -40,
        "nham": -40,
        "mau": -30
    },
    "tuat": {
        "mau": -40,
        "tan": -30,
        "dinh": 80
    },
    "hoi": {
        "nham": -40,
        "giap": 80
    }
},
"mao": {
    "ty": {
        "quy": -20
    },
    "thin": {
        "mau": -30,
        "at": 100,
        "quy": -20
    },
    "mui": {
        "ky": -50,
        "dinh": 20,
        "at": 100
    },
    "dau": {
        "tan": -20
    },
    "tuat": {
        "mau": -30,
        "tan": -20,
        "dinh": 20
    }
},
"thin": {
    "ty": {
        "quy": -40
    },
    "mao": {
        "at": 30
    },
    "thin": {
        "mau": 80,
        "at": 100,
        "quy": -50
    },
    "than": {
        "canh": 20,
        "nham": -80,
        "mau": 70
    },
    "dau": {
        "tan": 20
    },
    "tuat": {
        "mau": 80,
        "tan": 20,
        "dinh": -10
    }
},
"ty_2": {
    "suu": {
        "ky": 50,
        "quy": -30,
        "tan": -20
    },
    "dan": {
        "giap": -20,
        "binh": 80,
        "mau": 100
    },
    "than": {
        "canh": -40,
        "nham": -70,
        "mau": 100
    },
    "dau": {
        "tan": -20
    },
    "hoi": {
        "nham": -40,
        "giap": -20
    }
},
"ngo": {
    "ty": {
        "quy": -40
    },
    "suu": {
        "ky": 70,
        "quy": -70,
        "tan": -30
    },
    "dan": {
        "giap": -30,
        "binh": 30,
        "mau": 80
    },
    "ngo": {
        "dinh": 80,
        "ky": 100
    },
    "mui": {
        "ky": 70,
        "dinh": 80,
        "at": -20
    },
    "tuat": {
        "mau": 50,
        "tan": -40,
        "dinh": 80
    }
},
"mui": {
    "ty": {
        "quy": -70
    },
    "suu": {
        "ky": 80,
        "quy": -70,
        "tan": -30
    },
    "mao": {
        "at": -20
    },
    "ngo": {
        "dinh": 70,
        "ky": 80
    },
    "tuat": {
        "mau": 60,
        "tan": -20,
        "dinh": 80
    },
    "hoi": {
        "nham": -40,
        "giap": -30
    }
},
"than": {
    "ty": {
        "quy": 50
    },
    "dan": {
        "giap": -40,
        "binh": -50,
        "mau": -20
    },
    "thin": {
        "mau": -20,
        "at": 0,
        "quy": 80
    },
    "ty_2": {
        "binh": -30,
        "mau": -20,
        "canh": 80
    },
    "hoi": {
        "nham": 70,
        "giap": -30
    }
},
"dau": {
    "suu": {
        "ky": -20,
        "quy": 20,
        "tan": 100
    },
    "mao": {
        "at": -50
    },
    "thin": {
        "mau": -30,
        "at": -50,
        "quy": 20
    },
    "ty_2": {
        "binh": -20,
        "mau": -30,
        "canh": 50
    },
    "dau": {
        "tan": 100
    },
    "tuat": {
        "mau": -30,
        "tan": 100,
        "dinh": 0
    }
},
"tuat": {
    "suu": {
        "ky": 40,
        "quy": -20,
        "tan": 100
    },
    "dan": {
        "giap": -10,
        "binh": -30,
        "mau": 70
    },
    "mao": {
        "at": -20
    },
    "thin": {
        "mau": 80,
        "at": -50,
        "quy": -10
    },
    "ngo": {
        "dinh": -30,
        "ky": 30
    },
    "mui": {
        "ky": 40,
        "dinh": -30,
        "at": -50
    },
    "dau": {
        "tan": 80
    }
},
"hoi": {
    "dan": {
        "giap": 80,
        "binh": -30,
        "mau": -50
    },
    "mao": {
        "at": 50
    },
    "ty_2": {
        "binh": -40,
        "mau": -50,
        "canh": -40
    },
    "mui": {
        "ky": -20,
        "dinh": 0,
        "at": 80
    },
    "than": {
        "canh": -30,
        "nham": 100,
        "mau": -50
    },
    "hoi": {
        "nham": 90,
        "giap": 100
    }
}
}

const nguyet_lenh={
    "nguyet_lenh_1": {
        "description": "Sinh vào tháng Dần, Mão và 12 ngày đầu tháng Thìn.",
        "gia_giam_tri_so": {
        "giap": 100,
        "at": 100,
        "binh": 30,
        "dinh": 30,
        "mau": -50,
        "ky": -50,
        "canh": -30,
        "tan": -30,
        "nham": -20,
        "quy": -20
        }
    },
    "nguyet_lenh_2": {
        "description": "Sinh vào tháng Tỵ, Ngọ và 12 ngày đầu tháng Mùi.",
        "gia_giam_tri_so": {
        "giap": -20,
        "at": -20,
        "binh": 100,
        "dinh": 100,
        "mau": 30,
        "ky": 30,
        "canh": -50,
        "tan": -50,
        "nham": -30,
        "quy": -30
        }
    },
    "nguyet_lenh_3": {
        "description": "Sinh vào tháng Thân, Dậu và 12 ngày đầu tháng Tuất.",
        "gia_giam_tri_so": {
        "giap": -50,
        "at": -50,
        "binh": -30,
        "dinh": -30,
        "mau": -20,
        "ky": -20,
        "canh": 100,
        "tan": 100,
        "nham": 30,
        "quy": 30
        }
    },
    "nguyet_lenh_4": {
        "description": "Sinh vào tháng Hợi, Tý và 12 ngày đầu tháng Sửu.",
        "gia_giam_tri_so": {
        "giap": 30,
        "at": 30,
        "binh": -50,
        "dinh": -50,
        "mau": -30,
        "ky": -30,
        "canh": -20,
        "tan": -20,
        "nham": 100,
        "quy": 100
        }
    },
    "nguyet_lenh_5": {
        "description": "Sinh vào 18 ngày cuối các tháng Thìn, Mùi, Tuất, Sửu.",
        "gia_giam_tri_so": {
        "giap": -30,
        "at": -30,
        "binh": -20,
        "dinh": -20,
        "mau": 100,
        "ky": 100,
        "canh": 30,
        "tan": 30,
        "nham": -50,
        "quy": -50
        }
    }     
}

const tri_so_can_chi={
      "giap_ty": {
        "thien_can": 20,
        "can_tang": {"quy": -20}
      },
      "at_suu": {
        "thien_can": -30,
        "can_tang": {"ky": -50}
      },
      "binh_dan": {
        "thien_can": 30,
        "can_tang": {"giap": -30}
      },
      "dinh_mao": {
        "thien_can": 20,
        "can_tang": {"at": -20}
      },
      "mau_thin": {
        "thien_can": 50,
        "can_tang": {"mau": 50}
      },
      "ky_ty_2": {
        "thien_can": 30,
        "can_tang": {"binh": -30}
      },
      "canh_ngo": {
        "thien_can": -50,
        "can_tang": {"dinh": -30}
      },
      "tan_mui": {
        "thien_can": 20,
        "can_tang": {"ky": -20}
      },
      "nham_than": {
        "thien_can": 30,
        "can_tang": {"canh": -30}
      },
      "quy_dau": {
        "thien_can": 20,
        "can_tang": {"tan": -20}
      },
      "giap_tuat": {
        "thien_can": -30,
        "can_tang": {"mau": -50}
      },
      "at_hoi": {
        "thien_can": 30,
        "can_tang": {"nham": -30}
      },
      "binh_ty": {
        "thien_can": -50,
        "can_tang": {"quy": -25}
      },
      "dinh_suu": {
        "thien_can": -30,
        "can_tang": {"ky": 30}
      },
      "mau_dan": {
        "thien_can": -50,
        "can_tang": {"giap": -30}
      },
      "ky_mao": {
        "thien_can": -50,
        "can_tang": {"at": -25}
      },
      "canh_thin": {
        "thien_can": 20,
        "can_tang": {"mau": -20}
      },
      "tan_ty_2": {
        "thien_can": -50,
        "can_tang": {"binh": -30}
      },
      "nham_ngo": {
        "thien_can": -30,
        "can_tang": {"dinh": -45}
      },
      "quy_mui": {
        "thien_can": -50,
        "can_tang": {"ky": -25}
      },
      "giap_than": {
        "thien_can": -50,
        "can_tang": {"canh": -30}
      },
      "at_dau": {
        "thien_can": -50,
        "can_tang": {"tan": -25}
      },
      "binh_tuat": {
        "thien_can": -30,
        "can_tang": {"mau": 30}
      },
      "dinh_hoi": {
        "thien_can": -50,
        "can_tang": {"nham": -30}
      },
      "mau_ty": {
        "thien_can": -30,
        "can_tang": {"quy": -45}
      },
      "ky_suu": {
        "thien_can": 50,
        "can_tang": {"ky": 50}
      },
      "canh_dan": {
        "thien_can": -30,
        "can_tang": {"giap": -45}
      },
      "tan_mao": {
        "thien_can": -30,
        "can_tang": {"at": -45}
      },
      "nham_thin": {
        "thien_can": -40,
        "can_tang": {"mau": -30}
      },
      "quy_ty_2": {
        "thien_can": -30,
        "can_tang": {"binh": -45}
      },
      "giap_ngo": {
        "thien_can": -30,
        "can_tang": {"dinh": 30}
      },
      "at_mui": {
        "thien_can": -30,
        "can_tang": {"ky": -50}
      },
      "binh_than": {
        "thien_can": -30,
        "can_tang": {"canh": -45}
      },
      "dinh_dau": {
        "thien_can": -30,
        "can_tang": {"tan": -45}
      },
      "mau_tuat": {
        "thien_can": 50,
        "can_tang": {"mau": 50}
      },
      "ky_hoi": {
        "thien_can": -30,
        "can_tang": {"nham": -45}
      },
      "canh_ty": {
        "thien_can": -30,
        "can_tang": {"quy": 30}
      },
      "tan_suu": {
        "thien_can": 30,
        "can_tang": {"ky": -30}
      },
      "nham_dan": {
        "thien_can": -30,
        "can_tang": {"giap": 30}
      },
      "quy_mao": {
        "thien_can": -30,
        "can_tang": {"at": 30}
      },
      "giap_thin": {
        "thien_can": 0,
        "can_tang": {"mau": -70}
      },
      "at_ty_2": {
        "thien_can": -30,
        "can_tang": {"binh": 30}
      },
      "binh_ngo": {
        "thien_can": 50,
        "can_tang": {"dinh": 50}
      },
      "dinh_mui": {
        "thien_can": -30,
        "can_tang": {"ky": 30}
      },
      "mau_than": {
        "thien_can": -30,
        "can_tang": {"canh": 30}
      },
      "ky_dau": {
        "thien_can": -30,
        "can_tang": {"tan": 30}
      },
      "canh_tuat": {
        "thien_can": 30,
        "can_tang": {"mau": -30}
      },
      "tan_hoi": {
        "thien_can": -30,
        "can_tang": {"nham": 30}
      },
      "nham_ty": {
        "thien_can": 50,
        "can_tang": {"quy": 50}
      },
      "quy_suu": {
        "thien_can": -40,
        "can_tang": {"ky": -30}
      },
      "giap_dan": {
        "thien_can": 50,
        "can_tang": {"giap": 50}
      },
      "at_mao": {
        "thien_can": 50,
        "can_tang": {"at": 50}
      },
      "binh_thin": {
        "thien_can": -30,
        "can_tang": {"mau": 30}
      },
      "dinh_ty_2": {
        "thien_can": 50,
        "can_tang": {"binh": 50}
      },
      "mau_ngo": {
        "thien_can": 30,
        "can_tang": {"dinh": -30}
      },
      "ky_mui": {
        "thien_can": 50,
        "can_tang": {"ky": 50}
      },
      "canh_than": {
        "thien_can": 50,
        "can_tang": {"canh": 50}
      },
      "tan_dau": {
        "thien_can": 50,
        "can_tang": {"tan": 50}
      },
      "nham_tuat": {
        "thien_can": -50,
        "can_tang": {"mau": -25}
      },
      "quy_hoi": {
        "thien_can": 50,
        "can_tang": {"nham": 50}
      }
}


const thien_can = ["canh", "tan", "nham", "quy", "giap", "at", "binh", "dinh", "mau", "ky"]

const dia_chi = ["than", "dau", "tuat", "hoi", "ty", "suu", "dan", "mao", "thin", "ty_2", "ngo", "mui"]

const gio_sinh_map=new Map([
  ["23:00 - 00:59", "Ty"],
  ["01:00 - 02:59", "Suu"],
  ["03:00 - 04:59", "Dan"],
  ["05:00 - 06:59", "Mao"],
  ["07:00 - 08:59", "Thin"],
  ["09:00 - 10:59", "Ty_2"],
  ["11:00 - 12:59", "Ngo"],
  ["13:00 - 14:59", "Mui"],
  ["15:00 - 16:59", "Than"],
  ["17:00 - 18:59", "Dau"],
  ["19:00 - 20:59", "Tuat"],
  ["21:00 - 22:59", "Hoi"]
]);

