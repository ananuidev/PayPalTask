var delimiters= [{
    'main': {
        "af": {
            "identity": {
                "version": {
                    "_number": "$Revision: 12293 $",
                    "_cldrVersion": "29"
                },
                "language": "af"
            },
            "delimiters": {
                "quotationStart": "“",
                "quotationEnd": "”",
                "alternateQuotationStart": "‘",
                "alternateQuotationEnd": "’"
            }
        },
        "agq": {
            "identity": {
                "version": {
                    "_number": "$Revision: 12307 $",
                    "_cldrVersion": "29"
                },
                "language": "agq"
            },
            "delimiters": {
                "quotationStart": "„",
                "quotationEnd": "”",
                "alternateQuotationStart": "‚",
                "alternateQuotationEnd": "’"
            }
        },
        "af-NA": {
            "identity": {
                "version": {
                    "_number": "$Revision: 11914 $",
                    "_cldrVersion": "29"
                },
                "language": "af",
                "territory": "NA"
            },
            "delimiters": {
                "quotationStart": "“",
                "quotationEnd": "”",
                "alternateQuotationStart": "‘",
                "alternateQuotationEnd": "’"
            }
        },
        "agq": {
            "identity": {
                "version": {
                    "_number": "$Revision: 12307 $",
                    "_cldrVersion": "29"
                },
                "language": "agq"
            },
            "delimiters": {
                "quotationStart": "„",
                "quotationEnd": "”",
                "alternateQuotationStart": "‚",
                "alternateQuotationEnd": "’"
            }
        },
        "am": {
            "identity": {
                "version": {
                    "_number": "$Revision: 12293 $",
                    "_cldrVersion": "29"
                },
                "language": "am"
            },
            "delimiters": {
                "quotationStart": "«",
                "quotationEnd": "»",
                "alternateQuotationStart": "‹",
                "alternateQuotationEnd": "›"
            }
        },
        "ar-KM": {
      "identity": {
        "version": {
          "_number": "$Revision: 11914 $",
          "_cldrVersion": "29"
        },
        "language": "ar-KM",
        "territory": "KM"
      },
      "delimiters": {
        "quotationStart": "”",
        "quotationEnd": "“",
        "alternateQuotationStart": "’",
        "alternateQuotationEnd": "‘"
      }
    },
    "ar-LY": {
      "identity": {
        "version": {
          "_number": "$Revision: 11914 $",
          "_cldrVersion": "29"
        },
        "language": "ar-LY",
        "territory": "LY"
      },
      "delimiters": {
        "quotationStart": "”",
        "quotationEnd": "“",
        "alternateQuotationStart": "’",
        "alternateQuotationEnd": "‘"
      }
    },
    "ar-OM": {
      "identity": {
        "version": {
          "_number": "$Revision: 11914 $",
          "_cldrVersion": "29"
        },
        "language": "ar-OM",
        "territory": "OM"
      },
      "delimiters": {
        "quotationStart": "”",
        "quotationEnd": "“",
        "alternateQuotationStart": "’",
        "alternateQuotationEnd": "‘"
      }
    },
    "ar-QA": {
      "identity": {
        "version": {
          "_number": "$Revision: 11914 $",
          "_cldrVersion": "29"
        },
        "language": "ar-QA",
        "territory": "QA"
      },
      "delimiters": {
        "quotationStart": "”",
        "quotationEnd": "“",
        "alternateQuotationStart": "’",
        "alternateQuotationEnd": "‘"
      }
    },
    "ar-SA": {
      "identity": {
        "version": {
          "_number": "$Revision: 11914 $",
          "_cldrVersion": "29"
        },
        "language": "ar-SA",
        "territory": "SA"
      },
      "delimiters": {
        "quotationStart": "”",
        "quotationEnd": "“",
        "alternateQuotationStart": "’",
        "alternateQuotationEnd": "‘"
      }
    }

    }
}]
   var  result=[];
   var dupResult=[];
exports.findAll = function (req, res) {
 
    var name = req.query.name;
   
    var obj = {};
    obj = delimiters[0].main;
    for (var key in obj) {
       result.push({'Language':obj[key].identity.language,
        'name':obj[key].delimiters[name]});
         }
     res.send(result);
   dupResult=result;
     result=[];
};

exports.deleteItem = function (req, res) {
    var item = req.query.item;
    for(var j=0; j<dupResult.length; j++){
        if(dupResult[j].Language==item.Language){
            dupResult.splice(j,1);
        }
    }
 res.send(dupResult);

    };
exports.addItem = function (req, res) {
    var item = req.query.item;
            dupResult.push({'Language':item.Language,
        'name':item.name});
 res.send(dupResult);

    };
