/**
 should contain connections to an api for recieving and sending information
 will probably be hardcoded with the info for now
 */

export default class API {

    static getGlobalDefault() {
        return {
            "intronic_region": [-20, 6],
            "disease_mode": "ANY",
            "last_exon_important": "LEI",
            "exclude_genes": ["PMS2"],
            "freq_groups": {
                "external": {
                    "ExAC": ["G"],
                    "1000g": ["G"],
                    "esp6500": ["AA", "EA"]
                },
                "internal": {
                    "inDB": ["AF"]
                }
            },
            "freq_cutoffs": {
                "AD": {
                    "external": {
                        "hi_freq_cutoff": 0.005,
                        "lo_freq_cutoff": 0.001
                    },
                    "internal": {
                        "hi_freq_cutoff": 0.05,
                        "lo_freq_cutoff": 1.0
                    }
                },
                "default": {
                    "external": {
                        "hi_freq_cutoff": 0.01,
                        "lo_freq_cutoff": 1.0
                    },
                    "internal": {
                        "hi_freq_cutoff": 0.05,
                        "lo_freq_cutoff": 1.0
                    }
                }
            }
        }
    }

    static getGeneList() {
        var genes = {
            "APC":  {
                "id": 583,
                "inheritance": "AD"
            },
            "BMPR1A": { 
				 "id": 1076,
				 "inheritance": "AD"
			},
            "BRCA1": {
				 "id": 1100,
				 "inheritance": "AD"
			},
            "BRCA2": {
				 "id": 1101,
				 "inheritance": "AD"
			},
            "CDH1": {
				 "id": 1748,
				 "inheritance": "AD"
			},
            "CDK4": {
				 "id": 1773,
				 "inheritance": "AD"
			},
            "CDKN2A": {
				 "id": 1787,
				 "inheritance": "AD"
			},
            "EXT1": {
				 "id": 3512,
				 "inheritance": "AD"
			},
            "EXT2": {
				 "id": 3513,
				 "inheritance": "AD"
			},
            "FLCN": {
				 "id": 27310,
				 "inheritance": "AD"
			},
            "HOXB13": {
				 "id": 5112,
				 "inheritance": "AD"
			},
            "MLH1": {
				 "id": 7127,
				 "inheritance": "AD"
			},
            "MSH2": {
				 "id": 7325,
				 "inheritance": "AD"
			},
            "MSH6": {
				 "id": 7329,
				 "inheritance": "AD"
			},
            "MUTYH": {
				 "id": 7527,
				 "inheritance": "AR"
			},
            "PALB2": {
				 "id": 26144,
				 "inheritance": "AD"
			},
            "PMS2": {
				 "id": 9122,
				 "inheritance": "AD"
			},
            "POLD1": {
				 "id": 9175,
				 "inheritance": "AD"
			},
            "POLE": {
				 "id": 9177,
				 "inheritance": "AD"
			},
            "PTEN": {
				 "id": 9588,
				 "inheritance": "AD"
			},
            "RB1": {
				 "id": 9884,
				 "inheritance": "AD"
			},
            "SDHB": {
				 "id": 10681,
				 "inheritance": "AD"
			},
            "SDHD": {
				 "id": 10683,
				 "inheritance": "AD"
			},
            "SMAD4": {
				 "id": 6770,
				 "inheritance": "AD"
			},
            "STK11": {
				 "id": 11389,
				 "inheritance": "AD"
			},
            "TP53": {
				 "id": 11998,
				 "inheritance": "AD"
			},
            "VHL": {
                "id": 12687,
                "inheritance": "AD"
            }
        };
        return genes;
    }

    static getGenes() {

        return {


            "genes": [{
                "name": "APC",
                "values": {
                    "Inheritance": "AD",
                    "Frequency HI external": 0.005,
                    "Frequency LOW external": 0.001,
                    "Frequency HI internal": 0.05,
                    "Frequency LOW internal": 1,
                    "Disease mode": "ANY",
                    "Last exon important": "LEI",
                    "Free text": "Use the InSiGHT critieria: http://insight-group.org/criteria/ The exception is synonymous variants and intron variants outside the consensus region (ACMG BSxBP7), which can be classified as class 2 as for other genes."
                }},{
                "name": "BMPR1A",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LEI",
                        "Free text": ""
                    }},{
                "name": "BRCA1",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LEI",
                        "Free text": ""
                    }},{
                "name": "BRCA2",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LEI",
                        "Free text": ""
                    }},{
                "name": "CDH1",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LENI",
                        "Free text": ""
                    }},{
                "name": "CDK4",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LENI",
                        "Free text": ""
                    }},{
                "name": "CDKN2A",
                "values": {
                    "Inheritance": "AD",
                    "Frequency HI external": 0.005,
                    "Frequency LOW external": 0.001,
                    "Frequency HI internal": 0.05,
                    "Frequency LOW internal": 1,
                    "Disease mode": "ANY",
                    "Last exon important": "LEI",
                    "Free text": ""
                }},{
                "name": "MLH1",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LEI",
                        "Free text": ""
        }},{
                "name": "MSH2",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LENI",
                        "Free text": ""
            }},{
                "name": "MUTYH",
                "values": {
                        "Inheritance": "AR",
                        "Frequency HI external": 0.01,
                        "Frequency LOW external": 1,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LENI",
                        "Free text": ""
            }},{
                "name": "PALB2",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LENI",
                        "Free text": ""
            }},{
                "name": "PMS2",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LEI",
                        "Free text": ""
            }},{
                "name": "PTEN",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LEI",
                        "Free text": ""
            }},{
                "name": "SMAD4",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LEI",
                        "Free text": ""
            }},{
                "name": "TP53",
                "values": {
                        "Inheritance": "AD",
                        "Frequency HI external": 0.005,
                        "Frequency LOW external": 0.001,
                        "Frequency HI internal": 0.05,
                        "Frequency LOW internal": 1,
                        "Disease mode": "ANY",
                        "Last exon important": "LENI",
                        "Free text": ""
                    }}]
        }
    }

    static getGenePanelConfig() {
        return {
            "config": {
                "meta": {
                    "source": "HBOC_v01.config.json",
                    "version": "1.0",
                    "updatedBy": "Erik",
                    "updatedAt": "2016-08-12T10:36:00+01:00"
                },
                "data": {
                    "groups": {
                        "default": {
                            "display": "My filter",
                            "config": {
                                "exclude_genes": [
                                    "PLOD1"
                                ],
                                "freq_cutoffs": {
                                    "AD": {
                                        "external": {
                                            "hi_freq_cutoff": 0.008,
                                            "lo_freq_cutoff": 0.0005
                                        },
                                        "internal": {
                                            "hi_freq_cutoff": 0.018,
                                            "lo_freq_cutoff": 0.085
                                        }
                                    },
                                    "default": {
                                        "external": {
                                            "hi_freq_cutoff": 0.01,
                                            "lo_freq_cutoff": 1
                                        },
                                        "internal": {
                                            "hi_freq_cutoff": 0.05,
                                            "lo_freq_cutoff": 1
                                        }
                                    }
                                },
                                "last_exon_important": "LENI",
                                "disease_mode": "ANY",
                                "comment": "a comment from the genepanel config",
                                "genes": {
                                    "BRCA1": {
                                        "disease_mode": "LOF",
                                        "comment": "test"
                                    },
                                    "BRCA2": {
                                        "disease_mode": "MISS",
                                        "last_exon_important": "LEI"
                                    }
                                }
                            }
                        },
                        "low_freq": {
                            "display": "Low frequency",
                            "config": {
                                "exclude_genes": [
                                    "PLOD1"
                                ],
                                "freq_cutoffs": {
                                    "AD": {
                                        "external": {
                                            "hi_freq_cutoff": 0.000006,
                                            "lo_freq_cutoff": 0.000006
                                        },
                                        "internal": {
                                            "hi_freq_cutoff": 0.000001,
                                            "lo_freq_cutoff": 0.000001
                                        }
                                    },
                                    "default": {
                                        "external": {
                                            "hi_freq_cutoff": 0.0006,
                                            "lo_freq_cutoff": 0.0004
                                        },
                                        "internal": {
                                            "hi_freq_cutoff": 0.0002,
                                            "lo_freq_cutoff": 0.0001
                                        }
                                    }
                                },
                                "freq_groups": {
                                    "exac": {
                                        "ExAC": [
                                            "G"
                                        ]
                                    },
                                    "internal": {
                                        "inDB": [
                                            "AF"
                                        ]
                                    }
                                },
                                "last_exon_important": "LENI",
                                "disease_mode": "ANY",
                                "comment": "a comment from the genepanel config",
                                "genes": {
                                    "BRCA1": {
                                        "disease_mode": "LOF"
                                    },
                                    "BRCA2": {
                                        "disease_mode": "MISS",
                                        "last_exon_important": "LEI",
                                        "freq_cutoffs": {
                                            "external": {
                                                "hi_freq_cutoff": 0.00063,
                                                "lo_freq_cutoff": 0.00043
                                            },
                                            "internal": {
                                                "hi_freq_cutoff": 0.00023,
                                                "lo_freq_cutoff": 0.00013
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    static getGenePanelConfig2() {
        return {
            "meta": {
                "source": "fooo",
                "version": "1.0",
                "schemaVersion": "2",
                "updatedBy": "Erik",
                "updatedAt": "2017-11-01T10:36:00+01:00"
            },
            "data": {
                "last_exon_important": "LENI",
                "disease_mode": "ANY",
                "freq_cutoff_groups": {
                    "AD": {
                        "external": {
                            "hi_freq_cutoff": 0.008,
                            "lo_freq_cutoff": 0.0005
                        },
                        "internal": {
                            "hi_freq_cutoff": 0.018,
                            "lo_freq_cutoff": 0.085
                        }
                    },
                    "default": {
                        "external": {
                            "hi_freq_cutoff": 0.01,
                            "lo_freq_cutoff": 1
                        },
                        "internal": {
                            "hi_freq_cutoff": 0.05,
                            "lo_freq_cutoff": 1
                        }
                    }
                },
                "genes": {
                    "BRCA1": {
                        "disease_mode": "LOF",
                        "external": {
                            "hi_freq_cutoff": 0.0006,
                            "lo_freq_cutoff": 0.0004
                        }
                    },
                    "BRCA2": {
                        "disease_mode": "MISS",
                        "last_exon_important": "LEI",
                        "external": {
                            "hi_freq_cutoff": 0.000006,
                            "lo_freq_cutoff": 0.000006
                        },
                        "internal": {
                            "hi_freq_cutoff": 0.000001,
                            "lo_freq_cutoff": 0.000001
                        }
                    }
                }
            }
        }
    }

    static getConfig() {
        return {
            "config": {
                "meta": {
                    "source": "EKGSanger_v02.config.json",
                    "version": "1.0",
                    "updatedBy": "Erik Severinsen",
                    "updatedAt": "2017-08-04T13:23:00+01:00"
                },
                "data": {
                    "APC" :   {
                        "comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {
                                "hi_freq_cutoff": 0.05,
                                "lo_freq_cutoff": 1.0},
                            "external": {
                                "hi_freq_cutoff": 0.005,
                                "lo_freq_cutoff": 0.000125
                            }}},
                    "BMPR1A": {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0000625}}},
                    "BRCA1":  {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0025}}},
                    "BRCA2":  {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0025}}},
                    "CDH1":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.00005}}},
                    "CDK4":   {"comment": "Se genspesifikk prosedyre i e-Håndbok"},
                    "CDKN2A": {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.000015}}},
                    "EXT1":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.01}}},
                    "EXT2":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.01}}},
                    "FLCN":   {"comment": "Se genspesifikk prosedyre i e-Håndbok"},
                    "HOXB13": {"comment": "Se genspesifikk prosedyre i e-Håndbok"},
                    "MLH1":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0023}}},
                    "MSH2":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0023}}},
                    "MSH6":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0023}}},
                    "MUTYH":  {"comment": "Se genspesifikk prosedyre i e-Håndbok"},
                    "PALB2":  {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0025}}},
                    "PMS2":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0023}}},
                    "POLD1":  {"comment": "Se genspesifikk prosedyre i e-Håndbok når den blir tigjengelig"},
                    "POLE":   {"comment": "Se genspesifikk prosedyre i e-Håndbok når den blir tigjengelig"},
                    "PTEN":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.000005}}},
                    "RB1":    {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.000071}}},
                    "SDHB":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0000033}}},
                    "SDHD":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0000033}}},
                    "SMAD4":  {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0000625}}},
                    "STK11":  {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.00004}}},
                    "TP53":   {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0002}}},
                    "VHL":    {"comment": "Se genspesifikk prosedyre i e-Håndbok", "freq_cutoffs": {"internal": { "hi_freq_cutoff": 0.05,  "lo_freq_cutoff": 1.0},                                                                                                    "external": { "hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.000028}}}
                }
            }
        }
    }

    static saveNewPanelConfig(newConfig) {
        console.log(JSON.stringify(newConfig));
    }
}

