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
            "APC": {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }, {
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
                }
            }]
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

    static getModifiedPanel() {
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
                        "external": {"hi_freq_cutoff": 0.008, "lo_freq_cutoff": 0.0005},
                        "internal": {"hi_freq_cutoff": 0.018, "lo_freq_cutoff": 0.085}
                    },
                    "default": {
                        "external": {"hi_freq_cutoff": 0.01, "lo_freq_cutoff": 1},
                        "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1}
                    }
                },
                "genes": {
                    "APC": {"comment": "Use the InSiGHT critieria: http://insight-group.org/criteria/ The exception is synonymous variants and intron variants outside the consensus region (ACMG BSxBP7), which can be classified as class 2 as for other genes."},
                    "BRCA1": {"external": {"hi_freq_cutoff": 0.0006, "lo_freq_cutoff": 0.0004}, "disease_mode": "LOF"},
                    "BRCA2": {
                        "external": {"hi_freq_cutoff": 0.000006, "lo_freq_cutoff": 0.000006},
                        "internal": {"hi_freq_cutoff": 0.000001, "lo_freq_cutoff": 0.000001},
                        "disease_mode": "MISS",
                        "last_exon_important": "LEI"
                    },
                    "HOXB13": {
                        "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.001},
                        "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1}
                    },
                    "MSH2": {
                        "external": {"hi_freq_cutoff": 0.0055, "lo_freq_cutoff": 0.0015},
                        "internal": {"hi_freq_cutoff": 0.055, "lo_freq_cutoff": 15},
                        "disease_mode": "LOF",
                    },
                    "PALB2": {
                        "external": {"hi_freq_cutoff": 0.0054, "lo_freq_cutoff": 0.001},
                        "internal": {"lo_freq_cutoff": 1},
                        "last_exon_important": "LEI"
                    },
                    "PMS2": {
                        "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.001},
                        "internal": {"hi_freq_cutoff": 0.054, "lo_freq_cutoff": 1},
                        "last_exon_important": "LEI"
                    },
                    "POLD1": {
                        "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.001},
                        "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1},
                        "disease_mode": "LOF",
                        "last_exon_important": "LEI"
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
                    "APC": {
                        "comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {
                                "hi_freq_cutoff": 0.05,
                                "lo_freq_cutoff": 1.0
                            },
                            "external": {
                                "hi_freq_cutoff": 0.005,
                                "lo_freq_cutoff": 0.000125
                            }
                        }
                    },
                    "BMPR1A": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0000625}
                        }
                    },
                    "BRCA1": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0025}
                        }
                    },
                    "BRCA2": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0025}
                        }
                    },
                    "CDH1": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.00005}
                        }
                    },
                    "CDK4": {"comment": "Se genspesifikk prosedyre i e-Håndbok"},
                    "CDKN2A": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.000015}
                        }
                    },
                    "EXT1": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.01}
                        }
                    },
                    "EXT2": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.01}
                        }
                    },
                    "FLCN": {"comment": "Se genspesifikk prosedyre i e-Håndbok"},
                    "HOXB13": {"comment": "Se genspesifikk prosedyre i e-Håndbok"},
                    "MLH1": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0023}
                        }
                    },
                    "MSH2": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0023}
                        }
                    },
                    "MSH6": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0023}
                        }
                    },
                    "MUTYH": {"comment": "Se genspesifikk prosedyre i e-Håndbok"},
                    "PALB2": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0025}
                        }
                    },
                    "PMS2": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0023}
                        }
                    },
                    "POLD1": {"comment": "Se genspesifikk prosedyre i e-Håndbok når den blir tigjengelig"},
                    "POLE": {"comment": "Se genspesifikk prosedyre i e-Håndbok når den blir tigjengelig"},
                    "PTEN": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.000005}
                        }
                    },
                    "RB1": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.000071}
                        }
                    },
                    "SDHB": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0000033}
                        }
                    },
                    "SDHD": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0000033}
                        }
                    },
                    "SMAD4": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0000625}
                        }
                    },
                    "STK11": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.00004}
                        }
                    },
                    "TP53": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.0002}
                        }
                    },
                    "VHL": {"comment": "Se genspesifikk prosedyre i e-Håndbok",
                        "freq_cutoffs": {
                            "internal": {"hi_freq_cutoff": 0.05, "lo_freq_cutoff": 1.0},
                            "external": {"hi_freq_cutoff": 0.005, "lo_freq_cutoff": 0.000028}
                        }
                    }
                }
            }
        }
    }

    static saveNewPanelConfig(newConfig) {
        console.log(JSON.stringify(newConfig));

        var filename = "GenePanel " + newConfig.meta.source + " " + newConfig.meta.version + ".txt";
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(newConfig)));
        pom.setAttribute('download', filename);

        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }

    }

    static testLargeAmountOfGenes() {
        var genes ={
            "APC": {
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
            },
            "RNPEPL1": {
                "id": 10079,
                "inheritance": "AD"
            },
            "SNORD20": {
                "id": 10143,
                "inheritance": "AD"
            },
            "RNU4-8P": {
                "id": 10195,
                "inheritance": "AD"
            },
            "BCS1L": {
                "id": 1020,
                "inheritance": "AD"
            },
            "SNORD51": {
                "id": 10201,
                "inheritance": "AD"
            },
            "SNORD53": {
                "id": 10203,
                "inheritance": "AD"
            },
            "BCYRN1": {
                "id": 1022,
                "inheritance": "AD"
            },
            "SNORD82": {
                "id": 10240,
                "inheritance": "AD"
            },
            "ROCK2": {
                "id": 10252,
                "inheritance": "AD"
            },
            "RPE": {
                "id": 10293,
                "inheritance": "AD"
            },
            "RPIA": {
                "id": 10297,
                "inheritance": "AD"
            },
            "RPL31": {
                "id": 10334,
                "inheritance": "AD"
            },
            "RPL37A": {
                "id": 10348,
                "inheritance": "AD"
            },
            "CNNM3": {
                "id": 104,
                "inheritance": "AD"
            },
            "RPS27A": {
                "id": 10417,
                "inheritance": "AD"
            },
            "RPS7": {
                "id": 10440,
                "inheritance": "AD"
            },
            "CNOT9": {
                "id": 10445,
                "inheritance": "AD"
            },
            "RRM2": {
                "id": 10452,
                "inheritance": "AD"
            },
            "RTKN": {
                "id": 10466,
                "inheritance": "AD"
            },
            "CNNM4": {
                "id": 105,
                "inheritance": "AD"
            },
            "BIN1": {
                "id": 1052,
                "inheritance": "AD"
            },
            "SAG": {
                "id": 10521,
                "inheritance": "AD"
            },
            "SCG2": {
                "id": 10575,
                "inheritance": "AD"
            },
            "SCN1A": {
                "id": 10585,
                "inheritance": "AD"
            },
            "SCN2A": {
                "id": 10588,
                "inheritance": "AD"
            },
            "SCN3A": {
                "id": 10590,
                "inheritance": "AD"
            },
            "SCN7A": {
                "id": 10594,
                "inheritance": "AD"
            },
            "SCN9A": {
                "id": 10597,
                "inheritance": "AD"
            },
            "SCTR": {
                "id": 10608,
                "inheritance": "AD"
            },
            "CCL20": {
                "id": 10619,
                "inheritance": "AD"
            },
            "SDC1": {
                "id": 10658,
                "inheritance": "AD"
            },
            "SDHDP5": {
                "id": 10688,
                "inheritance": "AD"
            },
            "CAVIN2": {
                "id": 10690,
                "inheritance": "AD"
            },
            "SEMA4C": {
                "id": 10731,
                "inheritance": "AD"
            },
            "SEMA4F": {
                "id": 10734,
                "inheritance": "AD"
            },
            "SF3B1": {
                "id": 10768,
                "inheritance": "AD"
            },
            "BMPR2": {
                "id": 1078,
                "inheritance": "AD"
            },
            "SRSF7": {
                "id": 10789,
                "inheritance": "AD"
            },
            "SFTPB": {
                "id": 10801,
                "inheritance": "AD"
            },
            "SH3BP4": {
                "id": 10826,
                "inheritance": "AD"
            },
            "ST6GAL2": {
                "id": 10861,
                "inheritance": "AD"
            },
            "BOK": {
                "id": 1087,
                "inheritance": "AD"
            },
            "ST3GAL5": {
                "id": 10872,
                "inheritance": "AD"
            },
            "SIX2": {
                "id": 10888,
                "inheritance": "AD"
            },
            "SIX3": {
                "id": 10889,
                "inheritance": "AD"
            },
            "SLC11A1": {
                "id": 10907,
                "inheritance": "AD"
            },
            "SLC40A1": {
                "id": 10909,
                "inheritance": "AD"
            },
            "SLC1A4": {
                "id": 10942,
                "inheritance": "AD"
            },
            "SLC20A1": {
                "id": 10946,
                "inheritance": "AD"
            },
            "SLC25A12": {
                "id": 10982,
                "inheritance": "AD"
            },
            "SLC30A3": {
                "id": 11014,
                "inheritance": "AD"
            },
            "SLC3A1": {
                "id": 11025,
                "inheritance": "AD"
            },
            "SLC4A3": {
                "id": 11029,
                "inheritance": "AD"
            },
            "SLC5A6": {
                "id": 11041,
                "inheritance": "AD"
            },
            "BABAM2": {
                "id": 1106,
                "inheritance": "AD"
            },
            "SLC8A1": {
                "id": 11068,
                "inheritance": "AD"
            },
            "SLC9A2": {
                "id": 11072,
                "inheritance": "AD"
            },
            "SLC9A4": {
                "id": 11077,
                "inheritance": "AD"
            },
            "ZFP36L2": {
                "id": 1108,
                "inheritance": "AD"
            },
            "SMARCAL1": {
                "id": 11102,
                "inheritance": "AD"
            },
            "NCAPH": {
                "id": 1112,
                "inheritance": "AD"
            },
            "SNAI1P1": {
                "id": 11129,
                "inheritance": "AD"
            },
            "SNRPG": {
                "id": 11163,
                "inheritance": "AD"
            },
            "SOS1": {
                "id": 11187,
                "inheritance": "AD"
            },
            "SOX11": {
                "id": 11191,
                "inheritance": "AD"
            },
            "SP100": {
                "id": 11206,
                "inheritance": "AD"
            },
            "SP3": {
                "id": 11208,
                "inheritance": "AD"
            },
            "SPAST": {
                "id": 11233,
                "inheritance": "AD"
            },
            "SPP2": {
                "id": 11256,
                "inheritance": "AD"
            },
            "SPR": {
                "id": 11257,
                "inheritance": "AD"
            },
            "SPTBN1": {
                "id": 11275,
                "inheritance": "AD"
            },
            "SRD5A2": {
                "id": 11285,
                "inheritance": "AD"
            },
            "SSB": {
                "id": 11316,
                "inheritance": "AD"
            },
            "SSFA2": {
                "id": 11319,
                "inheritance": "AD"
            },
            "STAM2": {
                "id": 11358,
                "inheritance": "AD"
            },
            "STAT1": {
                "id": 11362,
                "inheritance": "AD"
            },
            "STAT4": {
                "id": 11365,
                "inheritance": "AD"
            },
            "STK16": {
                "id": 11394,
                "inheritance": "AD"
            },
            "STK17B": {
                "id": 11396,
                "inheritance": "AD"
            },
            "STK25": {
                "id": 11404,
                "inheritance": "AD"
            },
            "STRN": {
                "id": 11424,
                "inheritance": "AD"
            },
            "SUCLG1": {
                "id": 11449,
                "inheritance": "AD"
            },
            "SULT1C2": {
                "id": 11456,
                "inheritance": "AD"
            },
            "SULT1C4": {
                "id": 11457,
                "inheritance": "AD"
            },
            "BUB1": {
                "id": 1148,
                "inheritance": "AD"
            },
            "TACR1": {
                "id": 11526,
                "inheritance": "AD"
            },
            "EPCAM": {
                "id": 11529,
                "inheritance": "AD"
            },
            "TAF1B": {
                "id": 11533,
                "inheritance": "AD"
            },
            "TANK": {
                "id": 11562,
                "inheritance": "AD"
            },
            "TBR1": {
                "id": 11590,
                "inheritance": "AD"
            },
            "TCF7L1": {
                "id": 11640,
                "inheritance": "AD"
            },
            "TCL4": {
                "id": 11650,
                "inheritance": "AD"
            },
            "TDGF1P2": {
                "id": 11702,
                "inheritance": "AD"
            },
            "TFPI": {
                "id": 11760,
                "inheritance": "AD"
            },
            "TGFA": {
                "id": 11765,
                "inheritance": "AD"
            },
            "TIA1": {
                "id": 11802,
                "inheritance": "AD"
            },
            "KLF11": {
                "id": 11811,
                "inheritance": "AD"
            },
            "TLK1": {
                "id": 11841,
                "inheritance": "AD"
            },
            "TMEFF2": {
                "id": 11867,
                "inheritance": "AD"
            },
            "TMSB10": {
                "id": 11879,
                "inheritance": "AD"
            },
            "TMSB4XP2": {
                "id": 11884,
                "inheritance": "AD"
            },
            "TNFAIP6": {
                "id": 11898,
                "inheritance": "AD"
            },
            "TNP1": {
                "id": 11951,
                "inheritance": "AD"
            },
            "GIGYF2": {
                "id": 11960,
                "inheritance": "AD"
            },
            "TNRC17": {
                "id": 11961,
                "inheritance": "AD"
            },
            "TNS1": {
                "id": 11973,
                "inheritance": "AD"
            },
            "TPO": {
                "id": 12015,
                "inheritance": "AD"
            },
            "ACP1": {
                "id": 122,
                "inheritance": "AD"
            },
            "TRIP12": {
                "id": 12306,
                "inheritance": "AD"
            },
            "TSN": {
                "id": 12379,
                "inheritance": "AD"
            },
            "EIPR1": {
                "id": 12383,
                "inheritance": "AD"
            },
            "TTN": {
                "id": 12403,
                "inheritance": "AD"
            },
            "TUBA4A": {
                "id": 12407,
                "inheritance": "AD"
            },
            "UBBP1": {
                "id": 12464,
                "inheritance": "AD"
            },
            "UBBP3": {
                "id": 12466,
                "inheritance": "AD"
            },
            "UBE2E3": {
                "id": 12479,
                "inheritance": "AD"
            },
            "UBE2F": {
                "id": 12480,
                "inheritance": "AD"
            },
            "UBE3AP1": {
                "id": 12497,
                "inheritance": "AD"
            },
            "SUMO1": {
                "id": 12502,
                "inheritance": "AD"
            },
            "UCN": {
                "id": 12516,
                "inheritance": "AD"
            },
            "UGP2": {
                "id": 12527,
                "inheritance": "AD"
            },
            "UGT1A": {
                "id": 12529,
                "inheritance": "AD"
            },
            "UGT1A1": {
                "id": 12530,
                "inheritance": "AD"
            },
            "UGT1A10": {
                "id": 12531,
                "inheritance": "AD"
            },
            "UGT1A11P": {
                "id": 12532,
                "inheritance": "AD"
            },
            "UGT1A12P": {
                "id": 12533,
                "inheritance": "AD"
            },
            "UGT1A2P": {
                "id": 12534,
                "inheritance": "AD"
            },
            "UGT1A3": {
                "id": 12535,
                "inheritance": "AD"
            },
            "UGT1A4": {
                "id": 12536,
                "inheritance": "AD"
            },
            "UGT1A5": {
                "id": 12537,
                "inheritance": "AD"
            },
            "UGT1A6": {
                "id": 12538,
                "inheritance": "AD"
            },
            "UGT1A7": {
                "id": 12539,
                "inheritance": "AD"
            },
            "UGT1A8": {
                "id": 12540,
                "inheritance": "AD"
            },
            "UGT1A9": {
                "id": 12541,
                "inheritance": "AD"
            },
            "VAMP5": {
                "id": 12646,
                "inheritance": "AD"
            },
            "VAMP8": {
                "id": 12647,
                "inheritance": "AD"
            },
            "VAX2": {
                "id": 12661,
                "inheritance": "AD"
            },
            "VIL1": {
                "id": 12690,
                "inheritance": "AD"
            },
            "VIS1": {
                "id": 12696,
                "inheritance": "AD"
            },
            "VIT": {
                "id": 12697,
                "inheritance": "AD"
            },
            "VRK2": {
                "id": 12719,
                "inheritance": "AD"
            },
            "VSNL1": {
                "id": 12722,
                "inheritance": "AD"
            },
            "WIPF1": {
                "id": 12736,
                "inheritance": "AD"
            },
            "WBP1": {
                "id": 12737,
                "inheritance": "AD"
            },
            "WNT6": {
                "id": 12785,
                "inheritance": "AD"
            },
            "XDH": {
                "id": 12805,
                "inheritance": "AD"
            },
            "XPO1": {
                "id": 12825,
                "inheritance": "AD"
            },
            "XRCC5": {
                "id": 12833,
                "inheritance": "AD"
            },
            "YWHAQ": {
                "id": 12854,
                "inheritance": "AD"
            },
            "ZAP70": {
                "id": 12858,
                "inheritance": "AD"
            },
            "RNF103": {
                "id": 12859,
                "inheritance": "AD"
            },
            "ZNF142": {
                "id": 12927,
                "inheritance": "AD"
            },
            "ZNF2": {
                "id": 12991,
                "inheritance": "AD"
            },
            "EML4": {
                "id": 1316,
                "inheritance": "AD"
            },
            "GCFC2": {
                "id": 1317,
                "inheritance": "AD"
            },
            "IKZF2": {
                "id": 13177,
                "inheritance": "AD"
            },
            "STRADB": {
                "id": 13205,
                "inheritance": "AD"
            },
            "TRAK2": {
                "id": 13206,
                "inheritance": "AD"
            },
            "BCL11A": {
                "id": 13221,
                "inheritance": "AD"
            },
            "FIGN": {
                "id": 13285,
                "inheritance": "AD"
            },
            "HMGB1P9": {
                "id": 13320,
                "inheritance": "AD"
            },
            "INO80B": {
                "id": 13324,
                "inheritance": "AD"
            },
            "LPIN1": {
                "id": 13345,
                "inheritance": "AD"
            },
            "NIF3L1": {
                "id": 13390,
                "inheritance": "AD"
            },
            "BIRC6": {
                "id": 13516,
                "inheritance": "AD"
            },
            "FBXO11": {
                "id": 13590,
                "inheritance": "AD"
            },
            "MPP4": {
                "id": 13680,
                "inheritance": "AD"
            },
            "SNTG2": {
                "id": 13741,
                "inheritance": "AD"
            },
            "SLC4A10": {
                "id": 13811,
                "inheritance": "AD"
            },
            "SLC4A1AP": {
                "id": 13813,
                "inheritance": "AD"
            },
            "WNT10A": {
                "id": 13829,
                "inheritance": "AD"
            },
            "LOXL3": {
                "id": 13869,
                "inheritance": "AD"
            },
            "ABCG5": {
                "id": 13886,
                "inheritance": "AD"
            },
            "ABCG8": {
                "id": 13887,
                "inheritance": "AD"
            },
            "MEMO1": {
                "id": 14014,
                "inheritance": "AD"
            },
            "ALPPP": {
                "id": 14016,
                "inheritance": "AD"
            },
            "ECEL1P1": {
                "id": 14017,
                "inheritance": "AD"
            },
            "ECEL1P3": {
                "id": 14018,
                "inheritance": "AD"
            },
            "ECEL1P2": {
                "id": 14019,
                "inheritance": "AD"
            },
            "DIS3L2P1": {
                "id": 14021,
                "inheritance": "AD"
            },
            "SLC5A7": {
                "id": 14025,
                "inheritance": "AD"
            },
            "MRPL30": {
                "id": 14036,
                "inheritance": "AD"
            },
            "CACNB4": {
                "id": 1404,
                "inheritance": "AD"
            },
            "MRPL19": {
                "id": 14052,
                "inheritance": "AD"
            },
            "REV1": {
                "id": 14060,
                "inheritance": "AD"
            },
            "HDAC4": {
                "id": 14063,
                "inheritance": "AD"
            },
            "RTN4": {
                "id": 14085,
                "inheritance": "AD"
            },
            "WDR12": {
                "id": 14098,
                "inheritance": "AD"
            },
            "CAD": {
                "id": 1424,
                "inheritance": "AD"
            },
            "CREG2": {
                "id": 14272,
                "inheritance": "AD"
            },
            "BOLL": {
                "id": 14273,
                "inheritance": "AD"
            },
            "CIAO1": {
                "id": 14280,
                "inheritance": "AD"
            },
            "XIRP2": {
                "id": 14303,
                "inheritance": "AD"
            },
            "CRIPT": {
                "id": 14312,
                "inheritance": "AD"
            },
            "PLEKHA3": {
                "id": 14338,
                "inheritance": "AD"
            },
            "HTRA2": {
                "id": 14348,
                "inheritance": "AD"
            },
            "sep.10": {
                "id": 14349,
                "inheritance": "AD"
            },
            "TMEM237": {
                "id": 14432,
                "inheritance": "AD"
            },
            "CDK15": {
                "id": 14434,
                "inheritance": "AD"
            },
            "CARF": {
                "id": 14435,
                "inheritance": "AD"
            },
            "RAPH1": {
                "id": 14436,
                "inheritance": "AD"
            },
            "CFLAR-AS1": {
                "id": 14437,
                "inheritance": "AD"
            },
            "C2CD6": {
                "id": 14438,
                "inheritance": "AD"
            },
            "ALS2CR12": {
                "id": 14439,
                "inheritance": "AD"
            },
            "FAM117B": {
                "id": 14440,
                "inheritance": "AD"
            },
            "ICA1L": {
                "id": 14442,
                "inheritance": "AD"
            },
            "PARD3B": {
                "id": 14446,
                "inheritance": "AD"
            },
            "CALM2": {
                "id": 1445,
                "inheritance": "AD"
            },
            "MRPL33": {
                "id": 14487,
                "inheritance": "AD"
            },
            "MRPL35": {
                "id": 14489,
                "inheritance": "AD"
            },
            "MRPS5": {
                "id": 14498,
                "inheritance": "AD"
            },
            "ACTG2": {
                "id": 145,
                "inheritance": "AD"
            },
            "MRPS9": {
                "id": 14501,
                "inheritance": "AD"
            },
            "TSPYL6": {
                "id": 14521,
                "inheritance": "AD"
            },
            "TIGD1": {
                "id": 14523,
                "inheritance": "AD"
            },
            "SP5": {
                "id": 14529,
                "inheritance": "AD"
            },
            "RASGRP3": {
                "id": 14545,
                "inheritance": "AD"
            },
            "CDCA7": {
                "id": 14628,
                "inheritance": "AD"
            },
            "ABCA12": {
                "id": 14637,
                "inheritance": "AD"
            },
            "PPIG": {
                "id": 14650,
                "inheritance": "AD"
            },
            "RNF25": {
                "id": 14662,
                "inheritance": "AD"
            },
            "OR7E89P": {
                "id": 14730,
                "inheritance": "AD"
            },
            "OR7E90P": {
                "id": 14733,
                "inheritance": "AD"
            },
            "CAPG": {
                "id": 1474,
                "inheritance": "AD"
            },
            "OR7E91P": {
                "id": 14747,
                "inheritance": "AD"
            },
            "CAPN10": {
                "id": 1477,
                "inheritance": "AD"
            },
            "UBXN4": {
                "id": 14860,
                "inheritance": "AD"
            },
            "ZEB2": {
                "id": 14881,
                "inheritance": "AD"
            },
            "THUMPD2": {
                "id": 14890,
                "inheritance": "AD"
            },
            "MSGN1": {
                "id": 14907,
                "inheritance": "AD"
            },
            "TSGA10": {
                "id": 14927,
                "inheritance": "AD"
            },
            "PPP1R1C": {
                "id": 14940,
                "inheritance": "AD"
            },
            "PUM2": {
                "id": 14958,
                "inheritance": "AD"
            },
            "PXDN": {
                "id": 14966,
                "inheritance": "AD"
            },
            "SNX17": {
                "id": 14979,
                "inheritance": "AD"
            },
            "PAPOLG": {
                "id": 14982,
                "inheritance": "AD"
            },
            "CASP10": {
                "id": 1500,
                "inheritance": "AD"
            },
            "OR5S1P": {
                "id": 15040,
                "inheritance": "AD"
            },
            "OR6B2": {
                "id": 15041,
                "inheritance": "AD"
            },
            "OR6B3": {
                "id": 15042,
                "inheritance": "AD"
            },
            "OR7E102P": {
                "id": 15043,
                "inheritance": "AD"
            },
            "CASP8": {
                "id": 1509,
                "inheritance": "AD"
            },
            "TGOLN2": {
                "id": 15450,
                "inheritance": "AD"
            },
            "KCNIP3": {
                "id": 15523,
                "inheritance": "AD"
            },
            "LBX2": {
                "id": 15525,
                "inheritance": "AD"
            },
            "IL1F10": {
                "id": 15552,
                "inheritance": "AD"
            },
            "IL36RN": {
                "id": 15561,
                "inheritance": "AD"
            },
            "IL36A": {
                "id": 15562,
                "inheritance": "AD"
            },
            "IL37": {
                "id": 15563,
                "inheritance": "AD"
            },
            "IL36B": {
                "id": 15564,
                "inheritance": "AD"
            },
            "ILKAP": {
                "id": 15566,
                "inheritance": "AD"
            },
            "MYO3B": {
                "id": 15576,
                "inheritance": "AD"
            },
            "NBAS": {
                "id": 15625,
                "inheritance": "AD"
            },
            "B3GNT2": {
                "id": 15629,
                "inheritance": "AD"
            },
            "UGGT1": {
                "id": 15663,
                "inheritance": "AD"
            },
            "LRPPRC": {
                "id": 15714,
                "inheritance": "AD"
            },
            "PPH2": {
                "id": 15733,
                "inheritance": "AD"
            },
            "IL36G": {
                "id": 15741,
                "inheritance": "AD"
            },
            "DIRC1": {
                "id": 15760,
                "inheritance": "AD"
            },
            "GCA": {
                "id": 15990,
                "inheritance": "AD"
            },
            "CCNT2": {
                "id": 1600,
                "inheritance": "AD"
            },
            "TRIM54": {
                "id": 16008,
                "inheritance": "AD"
            },
            "ASB1": {
                "id": 16011,
                "inheritance": "AD"
            },
            "ASB3": {
                "id": 16013,
                "inheritance": "AD"
            },
            "MOB1A": {
                "id": 16015,
                "inheritance": "AD"
            },
            "ORMDL1": {
                "id": 16036,
                "inheritance": "AD"
            },
            "UNC50": {
                "id": 16046,
                "inheritance": "AD"
            },
            "PRADC1": {
                "id": 16047,
                "inheritance": "AD"
            },
            "SFXN5": {
                "id": 16073,
                "inheritance": "AD"
            },
            "LIMS2": {
                "id": 16084,
                "inheritance": "AD"
            },
            "CCT4": {
                "id": 1617,
                "inheritance": "AD"
            },
            "CCT7": {
                "id": 1622,
                "inheritance": "AD"
            },
            "SMYD5": {
                "id": 16258,
                "inheritance": "AD"
            },
            "SLC19A3": {
                "id": 16266,
                "inheritance": "AD"
            },
            "NFU1": {
                "id": 16287,
                "inheritance": "AD"
            },
            "HTR5BP": {
                "id": 16291,
                "inheritance": "AD"
            },
            "PPP1R2P5": {
                "id": 16320,
                "inheritance": "AD"
            },
            "PPP1R14BP2": {
                "id": 16329,
                "inheritance": "AD"
            },
            "GINGF3": {
                "id": 16333,
                "inheritance": "AD"
            },
            "FAM8A3P": {
                "id": 16374,
                "inheritance": "AD"
            },
            "OSBPL6": {
                "id": 16388,
                "inheritance": "AD"
            },
            "NLRC4": {
                "id": 16412,
                "inheritance": "AD"
            },
            "FARP2": {
                "id": 16460,
                "inheritance": "AD"
            },
            "PRPF40A": {
                "id": 16463,
                "inheritance": "AD"
            },
            "RAB17": {
                "id": 16523,
                "inheritance": "AD"
            },
            "RAB6C": {
                "id": 16525,
                "inheritance": "AD"
            },
            "CD28": {
                "id": 1653,
                "inheritance": "AD"
            },
            "RAPGEF4": {
                "id": 16626,
                "inheritance": "AD"
            },
            "MRPL44": {
                "id": 16650,
                "inheritance": "AD"
            },
            "CAPN13": {
                "id": 16663,
                "inheritance": "AD"
            },
            "CAPN14": {
                "id": 16664,
                "inheritance": "AD"
            },
            "MRPL53": {
                "id": 16684,
                "inheritance": "AD"
            },
            "CALCRL": {
                "id": 16709,
                "inheritance": "AD"
            },
            "MCEE": {
                "id": 16732,
                "inheritance": "AD"
            },
            "COPS7B": {
                "id": 16760,
                "inheritance": "AD"
            },
            "ACTR1B": {
                "id": 168,
                "inheritance": "AD"
            },
            "TGFBRAP1": {
                "id": 16836,
                "inheritance": "AD"
            },
            "SOCS5": {
                "id": 16852,
                "inheritance": "AD"
            },
            "DHRS9": {
                "id": 16888,
                "inheritance": "AD"
            },
            "PSMD14": {
                "id": 16889,
                "inheritance": "AD"
            },
            "L1RE3": {
                "id": 16899,
                "inheritance": "AD"
            },
            "ACTR2": {
                "id": 169,
                "inheritance": "AD"
            },
            "SPEG": {
                "id": 16901,
                "inheritance": "AD"
            },
            "KLHL41": {
                "id": 16905,
                "inheritance": "AD"
            },
            "MYCNOS": {
                "id": 16911,
                "inheritance": "AD"
            },
            "AGAP1": {
                "id": 16922,
                "inheritance": "AD"
            },
            "CDC42EP3": {
                "id": 16943,
                "inheritance": "AD"
            },
            "STAMBP": {
                "id": 16950,
                "inheritance": "AD"
            },
            "CGREF1": {
                "id": 16962,
                "inheritance": "AD"
            },
            "ACTR3": {
                "id": 170,
                "inheritance": "AD"
            },
            "STON1": {
                "id": 17003,
                "inheritance": "AD"
            },
            "GPN1": {
                "id": 17030,
                "inheritance": "AD"
            },
            "CD8A": {
                "id": 1706,
                "inheritance": "AD"
            },
            "RAB3GAP1": {
                "id": 17063,
                "inheritance": "AD"
            },
            "CD8B": {
                "id": 1707,
                "inheritance": "AD"
            },
            "CD8B2": {
                "id": 1708,
                "inheritance": "AD"
            },
            "EXOC6B": {
                "id": 17085,
                "inheritance": "AD"
            },
            "CLASP1": {
                "id": 17088,
                "inheritance": "AD"
            },
            "ACVR1": {
                "id": 171,
                "inheritance": "AD"
            },
            "SP140": {
                "id": 17133,
                "inheritance": "AD"
            },
            "NAGK": {
                "id": 17174,
                "inheritance": "AD"
            },
            "STK36": {
                "id": 17209,
                "inheritance": "AD"
            },
            "COLEC11": {
                "id": 17213,
                "inheritance": "AD"
            },
            "DFNA43": {
                "id": 17243,
                "inheritance": "AD"
            },
            "FUNDC2P2": {
                "id": 17247,
                "inheritance": "AD"
            },
            "MOB4": {
                "id": 17261,
                "inheritance": "AD"
            },
            "POLR1A": {
                "id": 17264,
                "inheritance": "AD"
            },
            "PASK": {
                "id": 17270,
                "inheritance": "AD"
            },
            "ACVR2A": {
                "id": 173,
                "inheritance": "AD"
            },
            "RPL23AP7": {
                "id": 17336,
                "inheritance": "AD"
            },
            "ARID5A": {
                "id": 17361,
                "inheritance": "AD"
            },
            "ALLC": {
                "id": 17377,
                "inheritance": "AD"
            },
            "MARCH7": {
                "id": 17393,
                "inheritance": "AD"
            },
            "GORASP2": {
                "id": 17500,
                "inheritance": "AD"
            },
            "ABHD1": {
                "id": 17553,
                "inheritance": "AD"
            },
            "PCGF1": {
                "id": 17615,
                "inheritance": "AD"
            },
            "STK39": {
                "id": 17717,
                "inheritance": "AD"
            },
            "SPRED2": {
                "id": 17722,
                "inheritance": "AD"
            },
            "UXS1": {
                "id": 17729,
                "inheritance": "AD"
            },
            "RHOQ": {
                "id": 17736,
                "inheritance": "AD"
            },
            "CDK5R2": {
                "id": 1776,
                "inheritance": "AD"
            },
            "TBC1D8": {
                "id": 17791,
                "inheritance": "AD"
            },
            "MAP3K20": {
                "id": 17797,
                "inheritance": "AD"
            },
            "FARSB": {
                "id": 17800,
                "inheritance": "AD"
            },
            "TIMM8AP1": {
                "id": 17802,
                "inheritance": "AD"
            },
            "DIRC3": {
                "id": 17805,
                "inheritance": "AD"
            },
            "NT5C1B": {
                "id": 17818,
                "inheritance": "AD"
            },
            "MDH1B": {
                "id": 17836,
                "inheritance": "AD"
            },
            "MSL3P1": {
                "id": 17837,
                "inheritance": "AD"
            },
            "NIFK": {
                "id": 17838,
                "inheritance": "AD"
            },
            "CHCHD5": {
                "id": 17840,
                "inheritance": "AD"
            },
            "TRAF3IP1": {
                "id": 17861,
                "inheritance": "AD"
            },
            "SPATA3": {
                "id": 17884,
                "inheritance": "AD"
            },
            "ZNF638": {
                "id": 17894,
                "inheritance": "AD"
            },
            "CBWD2": {
                "id": 17907,
                "inheritance": "AD"
            },
            "GRHL1": {
                "id": 17923,
                "inheritance": "AD"
            },
            "TFCP2L1": {
                "id": 17925,
                "inheritance": "AD"
            },
            "CD207": {
                "id": 17935,
                "inheritance": "AD"
            },
            "PRLH": {
                "id": 17945,
                "inheritance": "AD"
            },
            "PDB5": {
                "id": 17951,
                "inheritance": "AD"
            },
            "TRPM8": {
                "id": 17961,
                "inheritance": "AD"
            },
            "PARK11": {
                "id": 17963,
                "inheritance": "AD"
            },
            "AAMP": {
                "id": 18,
                "inheritance": "AD"
            },
            "ACYP2": {
                "id": 180,
                "inheritance": "AD"
            },
            "STARD7": {
                "id": 18063,
                "inheritance": "AD"
            },
            "NAT8": {
                "id": 18069,
                "inheritance": "AD"
            },
            "ACVR1C": {
                "id": 18123,
                "inheritance": "AD"
            },
            "ATP6V1E2": {
                "id": 18125,
                "inheritance": "AD"
            },
            "SCLY": {
                "id": 18161,
                "inheritance": "AD"
            },
            "SLC4A5": {
                "id": 18168,
                "inheritance": "AD"
            },
            "MOGAT1": {
                "id": 18210,
                "inheritance": "AD"
            },
            "TMEM37": {
                "id": 18216,
                "inheritance": "AD"
            },
            "DFNB58": {
                "id": 18252,
                "inheritance": "AD"
            },
            "HES6": {
                "id": 18254,
                "inheritance": "AD"
            },
            "ATP6V1C2": {
                "id": 18264,
                "inheritance": "AD"
            },
            "FMNL2": {
                "id": 18267,
                "inheritance": "AD"
            },
            "PECR": {
                "id": 18281,
                "inheritance": "AD"
            },
            "CFC1": {
                "id": 18292,
                "inheritance": "AD"
            },
            "KCNG3": {
                "id": 18306,
                "inheritance": "AD"
            },
            "YPEL5": {
                "id": 18329,
                "inheritance": "AD"
            },
            "SESTD1": {
                "id": 18379,
                "inheritance": "AD"
            },
            "BZW1": {
                "id": 18380,
                "inheritance": "AD"
            },
            "AOX2P": {
                "id": 18450,
                "inheritance": "AD"
            },
            "MCFD2": {
                "id": 18451,
                "inheritance": "AD"
            },
            "RNASEH1": {
                "id": 18466,
                "inheritance": "AD"
            },
            "CENPA": {
                "id": 1851,
                "inheritance": "AD"
            },
            "FOXD4L1": {
                "id": 18521,
                "inheritance": "AD"
            },
            "CYS1": {
                "id": 18525,
                "inheritance": "AD"
            },
            "SLEN2": {
                "id": 18543,
                "inheritance": "AD"
            },
            "FEV": {
                "id": 18562,
                "inheritance": "AD"
            },
            "TCF23": {
                "id": 18602,
                "inheritance": "AD"
            },
            "CDK7P1": {
                "id": 18614,
                "inheritance": "AD"
            },
            "TUBA4B": {
                "id": 18637,
                "inheritance": "AD"
            },
            "GULP1": {
                "id": 18649,
                "inheritance": "AD"
            },
            "VPS54": {
                "id": 18652,
                "inheritance": "AD"
            },
            "DNAH7": {
                "id": 18661,
                "inheritance": "AD"
            },
            "CNTNAP5": {
                "id": 18748,
                "inheritance": "AD"
            },
            "POLE4": {
                "id": 18755,
                "inheritance": "AD"
            },
            "CFLAR": {
                "id": 1876,
                "inheritance": "AD"
            },
            "B3GNT7": {
                "id": 18811,
                "inheritance": "AD"
            },
            "KCNH7": {
                "id": 18863,
                "inheritance": "AD"
            },
            "IFIH1": {
                "id": 18873,
                "inheritance": "AD"
            },
            "DUSP19": {
                "id": 18894,
                "inheritance": "AD"
            },
            "TMEM185B": {
                "id": 18896,
                "inheritance": "AD"
            },
            "AP1S3": {
                "id": 18971,
                "inheritance": "AD"
            },
            "DDX50P1": {
                "id": 18974,
                "inheritance": "AD"
            },
            "ADGRF3": {
                "id": 18989,
                "inheritance": "AD"
            },
            "CDK8P1": {
                "id": 18995,
                "inheritance": "AD"
            },
            "TRIM43": {
                "id": 19015,
                "inheritance": "AD"
            },
            "FER1L5": {
                "id": 19044,
                "inheritance": "AD"
            },
            "AOX3P": {
                "id": 19049,
                "inheritance": "AD"
            },
            "PSD4": {
                "id": 19096,
                "inheritance": "AD"
            },
            "STK11IP": {
                "id": 19184,
                "inheritance": "AD"
            },
            "THADA": {
                "id": 19217,
                "inheritance": "AD"
            },
            "EDDM3CP": {
                "id": 19224,
                "inheritance": "AD"
            },
            "PLEKHB2": {
                "id": 19236,
                "inheritance": "AD"
            },
            "LMAN2L": {
                "id": 19263,
                "inheritance": "AD"
            },
            "CDKL4": {
                "id": 19287,
                "inheritance": "AD"
            },
            "ACMSD": {
                "id": 19288,
                "inheritance": "AD"
            },
            "SLC30A6": {
                "id": 19305,
                "inheritance": "AD"
            },
            "TP53I3": {
                "id": 19373,
                "inheritance": "AD"
            },
            "LRRTM1": {
                "id": 19408,
                "inheritance": "AD"
            },
            "LRRTM4": {
                "id": 19411,
                "inheritance": "AD"
            },
            "ING5": {
                "id": 19421,
                "inheritance": "AD"
            },
            "CHN1": {
                "id": 1943,
                "inheritance": "AD"
            },
            "ADAM17": {
                "id": 195,
                "inheritance": "AD"
            },
            "CHRNA1": {
                "id": 1955,
                "inheritance": "AD"
            },
            "CHRND": {
                "id": 1965,
                "inheritance": "AD"
            },
            "CHST10": {
                "id": 19650,
                "inheritance": "AD"
            },
            "CHRNG": {
                "id": 1967,
                "inheritance": "AD"
            },
            "AAK1": {
                "id": 19679,
                "inheritance": "AD"
            },
            "GPBAR1": {
                "id": 19680,
                "inheritance": "AD"
            },
            "TTC7A": {
                "id": 19750,
                "inheritance": "AD"
            },
            "ASB18": {
                "id": 19770,
                "inheritance": "AD"
            },
            "EPB41L5": {
                "id": 19819,
                "inheritance": "AD"
            },
            "EMILIN1": {
                "id": 19880,
                "inheritance": "AD"
            },
            "AQP12A": {
                "id": 19941,
                "inheritance": "AD"
            },
            "SGPP2": {
                "id": 19953,
                "inheritance": "AD"
            },
            "RDH14": {
                "id": 19979,
                "inheritance": "AD"
            },
            "ANAPC1": {
                "id": 19988,
                "inheritance": "AD"
            },
            "GEMIN6": {
                "id": 20044,
                "inheritance": "AD"
            },
            "USP37": {
                "id": 20063,
                "inheritance": "AD"
            },
            "USP34": {
                "id": 20066,
                "inheritance": "AD"
            },
            "USP40": {
                "id": 20069,
                "inheritance": "AD"
            },
            "USP39": {
                "id": 20071,
                "inheritance": "AD"
            },
            "DHX57": {
                "id": 20086,
                "inheritance": "AD"
            },
            "ADAM23": {
                "id": 202,
                "inheritance": "AD"
            },
            "NOSTRIN": {
                "id": 20203,
                "inheritance": "AD"
            },
            "FNDC4": {
                "id": 20239,
                "inheritance": "AD"
            },
            "CAB39": {
                "id": 20292,
                "inheritance": "AD"
            },
            "DQX1": {
                "id": 20410,
                "inheritance": "AD"
            },
            "AHSA2P": {
                "id": 20437,
                "inheritance": "AD"
            },
            "MBD5": {
                "id": 20444,
                "inheritance": "AD"
            },
            "WDFY1": {
                "id": 20451,
                "inheritance": "AD"
            },
            "INSIG2": {
                "id": 20452,
                "inheritance": "AD"
            },
            "POLR1B": {
                "id": 20454,
                "inheritance": "AD"
            },
            "RNF144A": {
                "id": 20457,
                "inheritance": "AD"
            },
            "SMC6": {
                "id": 20466,
                "inheritance": "AD"
            },
            "CYP20A1": {
                "id": 20576,
                "inheritance": "AD"
            },
            "CYP26B1": {
                "id": 20581,
                "inheritance": "AD"
            },
            "PCYOX1": {
                "id": 20588,
                "inheritance": "AD"
            },
            "KCMF1": {
                "id": 20589,
                "inheritance": "AD"
            },
            "SLC23A3": {
                "id": 20601,
                "inheritance": "AD"
            },
            "PSME4": {
                "id": 20635,
                "inheritance": "AD"
            },
            "DPYSL5": {
                "id": 20637,
                "inheritance": "AD"
            },
            "TWIST2": {
                "id": 20670,
                "inheritance": "AD"
            },
            "CLK1": {
                "id": 2068,
                "inheritance": "AD"
            },
            "NBEAL1": {
                "id": 20681,
                "inheritance": "AD"
            },
            "SCA25": {
                "id": 20684,
                "inheritance": "AD"
            },
            "PROM2": {
                "id": 20685,
                "inheritance": "AD"
            },
            "ARMC9": {
                "id": 20730,
                "inheritance": "AD"
            },
            "FAM84A": {
                "id": 20743,
                "inheritance": "AD"
            },
            "FANCL": {
                "id": 20748,
                "inheritance": "AD"
            },
            "TUBA3E": {
                "id": 20765,
                "inheritance": "AD"
            },
            "ATG4B": {
                "id": 20790,
                "inheritance": "AD"
            },
            "CYBRD1": {
                "id": 20797,
                "inheritance": "AD"
            },
            "KDM3A": {
                "id": 20815,
                "inheritance": "AD"
            },
            "DPP10": {
                "id": 20823,
                "inheritance": "AD"
            },
            "SLC39A10": {
                "id": 20861,
                "inheritance": "AD"
            },
            "PPIL1P1": {
                "id": 20865,
                "inheritance": "AD"
            },
            "BMP10": {
                "id": 20869,
                "inheritance": "AD"
            },
            "GTDC1": {
                "id": 20887,
                "inheritance": "AD"
            },
            "SMYD1": {
                "id": 20986,
                "inheritance": "AD"
            },
            "ANKMY1": {
                "id": 20987,
                "inheritance": "AD"
            },
            "CPO": {
                "id": 21011,
                "inheritance": "AD"
            },
            "ANTXR1": {
                "id": 21014,
                "inheritance": "AD"
            },
            "ARHGAP15": {
                "id": 21030,
                "inheritance": "AD"
            },
            "CMD1H": {
                "id": 2108,
                "inheritance": "AD"
            },
            "ASIC4": {
                "id": 21263,
                "inheritance": "AD"
            },
            "COPS9": {
                "id": 21314,
                "inheritance": "AD"
            },
            "NEU4": {
                "id": 21328,
                "inheritance": "AD"
            },
            "CNC2": {
                "id": 2141,
                "inheritance": "AD"
            },
            "DAPL1": {
                "id": 21490,
                "inheritance": "AD"
            },
            "ATG16L1": {
                "id": 21498,
                "inheritance": "AD"
            },
            "CNGA3": {
                "id": 2150,
                "inheritance": "AD"
            },
            "TTL": {
                "id": 21586,
                "inheritance": "AD"
            },
            "LNPK": {
                "id": 21610,
                "inheritance": "AD"
            },
            "CTDSP1": {
                "id": 21614,
                "inheritance": "AD"
            },
            "SATB2": {
                "id": 21637,
                "inheritance": "AD"
            },
            "FSIP2": {
                "id": 21675,
                "inheritance": "AD"
            },
            "CERKL": {
                "id": 21699,
                "inheritance": "AD"
            },
            "ZNF804A": {
                "id": 21711,
                "inheritance": "AD"
            },
            "COL3A1": {
                "id": 2201,
                "inheritance": "AD"
            },
            "COL4A3": {
                "id": 2204,
                "inheritance": "AD"
            },
            "COL4A4": {
                "id": 2206,
                "inheritance": "AD"
            },
            "COL5A2": {
                "id": 2210,
                "inheritance": "AD"
            },
            "COL6A3": {
                "id": 2213,
                "inheritance": "AD"
            },
            "ATG9A": {
                "id": 22408,
                "inheritance": "AD"
            },
            "OTOS": {
                "id": 22644,
                "inheritance": "AD"
            },
            "COX5B": {
                "id": 2269,
                "inheritance": "AD"
            },
            "COX7A2L": {
                "id": 2289,
                "inheritance": "AD"
            },
            "GMPPA": {
                "id": 22923,
                "inheritance": "AD"
            },
            "GALNT14": {
                "id": 22946,
                "inheritance": "AD"
            },
            "GPR155": {
                "id": 22951,
                "inheritance": "AD"
            },
            "COMMD1": {
                "id": 23024,
                "inheritance": "AD"
            },
            "UPP2": {
                "id": 23061,
                "inheritance": "AD"
            },
            "OSGEPL1": {
                "id": 23075,
                "inheritance": "AD"
            },
            "RHBDD1": {
                "id": 23081,
                "inheritance": "AD"
            },
            "NANOGP2": {
                "id": 23100,
                "inheritance": "AD"
            },
            "RNF149": {
                "id": 23137,
                "inheritance": "AD"
            },
            "LDHAP7": {
                "id": 23144,
                "inheritance": "AD"
            },
            "DNMT3AP1": {
                "id": 23164,
                "inheritance": "AD"
            },
            "PNPT1": {
                "id": 23166,
                "inheritance": "AD"
            },
            "THAP4": {
                "id": 23187,
                "inheritance": "AD"
            },
            "RIF1": {
                "id": 23207,
                "inheritance": "AD"
            },
            "GKN1": {
                "id": 23217,
                "inheritance": "AD"
            },
            "GCC2": {
                "id": 23218,
                "inheritance": "AD"
            },
            "SPAG16": {
                "id": 23225,
                "inheritance": "AD"
            },
            "CPS1": {
                "id": 2323,
                "inheritance": "AD"
            },
            "GALNT13": {
                "id": 23242,
                "inheritance": "AD"
            },
            "GLC1H": {
                "id": 23256,
                "inheritance": "AD"
            },
            "CPSF3": {
                "id": 2326,
                "inheritance": "AD"
            },
            "PHF5GP": {
                "id": 23269,
                "inheritance": "AD"
            },
            "DYTN": {
                "id": 23279,
                "inheritance": "AD"
            },
            "ADCY3": {
                "id": 234,
                "inheritance": "AD"
            },
            "TMBIM1": {
                "id": 23410,
                "inheritance": "AD"
            },
            "CREB1": {
                "id": 2345,
                "inheritance": "AD"
            },
            "DOCK10": {
                "id": 23479,
                "inheritance": "AD"
            },
            "COBLL1": {
                "id": 23571,
                "inheritance": "AD"
            },
            "CRIM1": {
                "id": 2359,
                "inheritance": "AD"
            },
            "SLC35F5": {
                "id": 23617,
                "inheritance": "AD"
            },
            "GPR148": {
                "id": 23623,
                "inheritance": "AD"
            },
            "ANKRD20A8P": {
                "id": 23666,
                "inheritance": "AD"
            },
            "ACKR3": {
                "id": 23692,
                "inheritance": "AD"
            },
            "MTA3": {
                "id": 23784,
                "inheritance": "AD"
            },
            "PIKFYVE": {
                "id": 23785,
                "inheritance": "AD"
            },
            "ASXL2": {
                "id": 23805,
                "inheritance": "AD"
            },
            "CERS6": {
                "id": 23826,
                "inheritance": "AD"
            },
            "GMCL1": {
                "id": 23843,
                "inheritance": "AD"
            },
            "ITGB1BP1": {
                "id": 23927,
                "inheritance": "AD"
            },
            "CRYBA2": {
                "id": 2395,
                "inheritance": "AD"
            },
            "ABI2": {
                "id": 24011,
                "inheritance": "AD"
            },
            "SPC25": {
                "id": 24031,
                "inheritance": "AD"
            },
            "ATL2": {
                "id": 24047,
                "inheritance": "AD"
            },
            "ARL6IP6": {
                "id": 24048,
                "inheritance": "AD"
            },
            "GALM": {
                "id": 24063,
                "inheritance": "AD"
            },
            "TUBA3D": {
                "id": 24071,
                "inheritance": "AD"
            },
            "ANKRD36": {
                "id": 24079,
                "inheritance": "AD"
            },
            "CRYGA": {
                "id": 2408,
                "inheritance": "AD"
            },
            "CRYGB": {
                "id": 2409,
                "inheritance": "AD"
            },
            "ATRAID": {
                "id": 24090,
                "inheritance": "AD"
            },
            "CRYGC": {
                "id": 2410,
                "inheritance": "AD"
            },
            "CRYGD": {
                "id": 2411,
                "inheritance": "AD"
            },
            "TXNDC9": {
                "id": 24110,
                "inheritance": "AD"
            },
            "CRYGEP": {
                "id": 2412,
                "inheritance": "AD"
            },
            "ATOH8": {
                "id": 24126,
                "inheritance": "AD"
            },
            "CRYGFP": {
                "id": 2413,
                "inheritance": "AD"
            },
            "CRYGGP": {
                "id": 2414,
                "inheritance": "AD"
            },
            "C1QL2": {
                "id": 24181,
                "inheritance": "AD"
            },
            "RPRM": {
                "id": 24201,
                "inheritance": "AD"
            },
            "CIR1": {
                "id": 24217,
                "inheritance": "AD"
            },
            "CEBPZ": {
                "id": 24218,
                "inheritance": "AD"
            },
            "DRC1": {
                "id": 24245,
                "inheritance": "AD"
            },
            "FAHD2A": {
                "id": 24252,
                "inheritance": "AD"
            },
            "TPRKB": {
                "id": 24259,
                "inheritance": "AD"
            },
            "TRAPPC12": {
                "id": 24284,
                "inheritance": "AD"
            },
            "CHPF": {
                "id": 24291,
                "inheritance": "AD"
            },
            "COPS8": {
                "id": 24335,
                "inheritance": "AD"
            },
            "ADD2": {
                "id": 244,
                "inheritance": "AD"
            },
            "BOLA3": {
                "id": 24415,
                "inheritance": "AD"
            },
            "CYCSP6": {
                "id": 24421,
                "inheritance": "AD"
            },
            "CYCSP7": {
                "id": 24422,
                "inheritance": "AD"
            },
            "CYCSP8": {
                "id": 24423,
                "inheritance": "AD"
            },
            "CYCTP": {
                "id": 24424,
                "inheritance": "AD"
            },
            "DNER": {
                "id": 24456,
                "inheritance": "AD"
            },
            "RBM45": {
                "id": 24468,
                "inheritance": "AD"
            },
            "ANKRD23": {
                "id": 24470,
                "inheritance": "AD"
            },
            "FAM98A": {
                "id": 24520,
                "inheritance": "AD"
            },
            "EPC2": {
                "id": 24543,
                "inheritance": "AD"
            },
            "CNRIP1": {
                "id": 24546,
                "inheritance": "AD"
            },
            "SPATS2L": {
                "id": 24574,
                "inheritance": "AD"
            },
            "GKN2": {
                "id": 24588,
                "inheritance": "AD"
            },
            "DPY30": {
                "id": 24590,
                "inheritance": "AD"
            },
            "STEAP3": {
                "id": 24592,
                "inheritance": "AD"
            },
            "DYNC2LI1": {
                "id": 24595,
                "inheritance": "AD"
            },
            "AHCTF1P1": {
                "id": 24620,
                "inheritance": "AD"
            },
            "DNAJC10": {
                "id": 24637,
                "inheritance": "AD"
            },
            "C2orf40": {
                "id": 24642,
                "inheritance": "AD"
            },
            "ETAA1": {
                "id": 24648,
                "inheritance": "AD"
            },
            "FIGLA": {
                "id": 24669,
                "inheritance": "AD"
            },
            "TMEM150A": {
                "id": 24677,
                "inheritance": "AD"
            },
            "SNED1": {
                "id": 24696,
                "inheritance": "AD"
            },
            "SH3RF3": {
                "id": 24699,
                "inheritance": "AD"
            },
            "MFSD6": {
                "id": 24711,
                "inheritance": "AD"
            },
            "PTCD3": {
                "id": 24717,
                "inheritance": "AD"
            },
            "FAM228B": {
                "id": 24736,
                "inheritance": "AD"
            },
            "RBM44": {
                "id": 24756,
                "inheritance": "AD"
            },
            "ZC3H6": {
                "id": 24762,
                "inheritance": "AD"
            },
            "KLHL30": {
                "id": 24770,
                "inheritance": "AD"
            },
            "LONRF2": {
                "id": 24788,
                "inheritance": "AD"
            },
            "RBM43": {
                "id": 24790,
                "inheritance": "AD"
            },
            "RUFY4": {
                "id": 24804,
                "inheritance": "AD"
            },
            "DNAJC5G": {
                "id": 24844,
                "inheritance": "AD"
            },
            "RAB11FIP5": {
                "id": 24845,
                "inheritance": "AD"
            },
            "MFF": {
                "id": 24858,
                "inheritance": "AD"
            },
            "MOGS": {
                "id": 24862,
                "inheritance": "AD"
            },
            "GAL3ST2": {
                "id": 24869,
                "inheritance": "AD"
            },
            "OXER1": {
                "id": 24884,
                "inheritance": "AD"
            },
            "GREB1": {
                "id": 24885,
                "inheritance": "AD"
            },
            "ASNSD1": {
                "id": 24910,
                "inheritance": "AD"
            },
            "HSPA9P1": {
                "id": 24915,
                "inheritance": "AD"
            },
            "HNRNPA3": {
                "id": 24941,
                "inheritance": "AD"
            },
            "HS1BP3": {
                "id": 24979,
                "inheritance": "AD"
            },
            "DNAJB1P1": {
                "id": 24988,
                "inheritance": "AD"
            },
            "METTL5": {
                "id": 25006,
                "inheritance": "AD"
            },
            "LGALSL": {
                "id": 25012,
                "inheritance": "AD"
            },
            "CTLA4": {
                "id": 2505,
                "inheritance": "AD"
            },
            "CATIP": {
                "id": 25062,
                "inheritance": "AD"
            },
            "CCDC173": {
                "id": 25064,
                "inheritance": "AD"
            },
            "C2orf27A": {
                "id": 25077,
                "inheritance": "AD"
            },
            "CTNNA2": {
                "id": 2510,
                "inheritance": "AD"
            },
            "SP140L": {
                "id": 25105,
                "inheritance": "AD"
            },
            "PKDCC": {
                "id": 25123,
                "inheritance": "AD"
            },
            "HNRNPLL": {
                "id": 25127,
                "inheritance": "AD"
            },
            "TMEM169": {
                "id": 25130,
                "inheritance": "AD"
            },
            "mar.02": {
                "id": 25133,
                "inheritance": "AD"
            },
            "LBX2-AS1": {
                "id": 25136,
                "inheritance": "AD"
            },
            "NEURL3": {
                "id": 25162,
                "inheritance": "AD"
            },
            "WDR92": {
                "id": 25176,
                "inheritance": "AD"
            },
            "M1AP": {
                "id": 25183,
                "inheritance": "AD"
            },
            "CCDC148": {
                "id": 25191,
                "inheritance": "AD"
            },
            "MBOAT2": {
                "id": 25193,
                "inheritance": "AD"
            },
            "CCDC74A": {
                "id": 25197,
                "inheritance": "AD"
            },
            "ZFAND2B": {
                "id": 25206,
                "inheritance": "AD"
            },
            "MITD1": {
                "id": 25207,
                "inheritance": "AD"
            },
            "CNOT11": {
                "id": 25217,
                "inheritance": "AD"
            },
            "CNPPD1": {
                "id": 25220,
                "inheritance": "AD"
            },
            "MMADHC": {
                "id": 25221,
                "inheritance": "AD"
            },
            "ERLEC1": {
                "id": 25222,
                "inheritance": "AD"
            },
            "ZRANB3": {
                "id": 25249,
                "inheritance": "AD"
            },
            "TMEM18": {
                "id": 25257,
                "inheritance": "AD"
            },
            "ANKRD44": {
                "id": 25259,
                "inheritance": "AD"
            },
            "CCDC74B": {
                "id": 25267,
                "inheritance": "AD"
            },
            "CYP4F30P": {
                "id": 25270,
                "inheritance": "AD"
            },
            "C2orf16": {
                "id": 25275,
                "inheritance": "AD"
            },
            "LINC00309": {
                "id": 25279,
                "inheritance": "AD"
            },
            "LINC01963": {
                "id": 25283,
                "inheritance": "AD"
            },
            "FAHD2B": {
                "id": 25318,
                "inheritance": "AD"
            },
            "CFAP65": {
                "id": 25325,
                "inheritance": "AD"
            },
            "C2orf83": {
                "id": 25344,
                "inheritance": "AD"
            },
            "RPL23AP32": {
                "id": 25345,
                "inheritance": "AD"
            },
            "CLEC4F": {
                "id": 25357,
                "inheritance": "AD"
            },
            "FAM49A": {
                "id": 25373,
                "inheritance": "AD"
            },
            "TMEM163": {
                "id": 25380,
                "inheritance": "AD"
            },
            "HJURP": {
                "id": 25444,
                "inheritance": "AD"
            },
            "IWS1": {
                "id": 25467,
                "inheritance": "AD"
            },
            "KANSL3": {
                "id": 25473,
                "inheritance": "AD"
            },
            "MREG": {
                "id": 25478,
                "inheritance": "AD"
            },
            "SRBD1": {
                "id": 25521,
                "inheritance": "AD"
            },
            "CCDC88A": {
                "id": 25523,
                "inheritance": "AD"
            },
            "ANKZF1": {
                "id": 25527,
                "inheritance": "AD"
            },
            "CUL3": {
                "id": 2553,
                "inheritance": "AD"
            },
            "THNSL2": {
                "id": 25602,
                "inheritance": "AD"
            },
            "CXCR4": {
                "id": 2561,
                "inheritance": "AD"
            },
            "CCDC93": {
                "id": 25611,
                "inheritance": "AD"
            },
            "ACOXL": {
                "id": 25621,
                "inheritance": "AD"
            },
            "WDR33": {
                "id": 25651,
                "inheritance": "AD"
            },
            "TTC21B": {
                "id": 25660,
                "inheritance": "AD"
            },
            "ANKRD53": {
                "id": 25691,
                "inheritance": "AD"
            },
            "PGAP1": {
                "id": 25712,
                "inheritance": "AD"
            },
            "WDR75": {
                "id": 25725,
                "inheritance": "AD"
            },
            "CYB5AP2": {
                "id": 2573,
                "inheritance": "AD"
            },
            "NHEJ1": {
                "id": 25737,
                "inheritance": "AD"
            },
            "TTC31": {
                "id": 25759,
                "inheritance": "AD"
            },
            "WDR54": {
                "id": 25770,
                "inheritance": "AD"
            },
            "DCAF17": {
                "id": 25784,
                "inheritance": "AD"
            },
            "REEP1": {
                "id": 25786,
                "inheritance": "AD"
            },
            "FAM161A": {
                "id": 25808,
                "inheritance": "AD"
            },
            "EVA1A": {
                "id": 25816,
                "inheritance": "AD"
            },
            "COQ10B": {
                "id": 25819,
                "inheritance": "AD"
            },
            "CCDC121": {
                "id": 25833,
                "inheritance": "AD"
            },
            "RMND5A": {
                "id": 25850,
                "inheritance": "AD"
            },
            "TTC30A": {
                "id": 25853,
                "inheritance": "AD"
            },
            "METTL8": {
                "id": 25856,
                "inheritance": "AD"
            },
            "NOL10": {
                "id": 25862,
                "inheritance": "AD"
            },
            "MZT2B": {
                "id": 25886,
                "inheritance": "AD"
            },
            "CCDC142": {
                "id": 25889,
                "inheritance": "AD"
            },
            "ZNF514": {
                "id": 25894,
                "inheritance": "AD"
            },
            "FAM136A": {
                "id": 25911,
                "inheritance": "AD"
            },
            "TMEM87B": {
                "id": 25913,
                "inheritance": "AD"
            },
            "LINC01101": {
                "id": 25923,
                "inheritance": "AD"
            },
            "AFTPH": {
                "id": 25951,
                "inheritance": "AD"
            },
            "CYP1B1": {
                "id": 2597,
                "inheritance": "AD"
            },
            "TMEM214": {
                "id": 25983,
                "inheritance": "AD"
            },
            "TTC27": {
                "id": 25986,
                "inheritance": "AD"
            },
            "RETSAT": {
                "id": 25991,
                "inheritance": "AD"
            },
            "INO80D": {
                "id": 25997,
                "inheritance": "AD"
            },
            "TMEM127": {
                "id": 26038,
                "inheritance": "AD"
            },
            "CYP27A1": {
                "id": 2605,
                "inheritance": "AD"
            },
            "SLC35F6": {
                "id": 26055,
                "inheritance": "AD"
            },
            "C2orf42": {
                "id": 26056,
                "inheritance": "AD"
            },
            "TRMT61B": {
                "id": 26070,
                "inheritance": "AD"
            },
            "PID1": {
                "id": 26084,
                "inheritance": "AD"
            },
            "CLIP4": {
                "id": 26108,
                "inheritance": "AD"
            },
            "LDAH": {
                "id": 26145,
                "inheritance": "AD"
            },
            "AGBL5": {
                "id": 26147,
                "inheritance": "AD"
            },
            "SOWAHC": {
                "id": 26149,
                "inheritance": "AD"
            },
            "FASTKD1": {
                "id": 26150,
                "inheritance": "AD"
            },
            "WDCP": {
                "id": 26157,
                "inheritance": "AD"
            },
            "ELMOD3": {
                "id": 26158,
                "inheritance": "AD"
            },
            "IQCA1": {
                "id": 26195,
                "inheritance": "AD"
            },
            "MAIP1": {
                "id": 26198,
                "inheritance": "AD"
            },
            "C2orf54": {
                "id": 26216,
                "inheritance": "AD"
            },
            "FAM124B": {
                "id": 26224,
                "inheritance": "AD"
            },
            "TM4SF20": {
                "id": 26230,
                "inheritance": "AD"
            },
            "NABP1": {
                "id": 26232,
                "inheritance": "AD"
            },
            "MAP3K19": {
                "id": 26249,
                "inheritance": "AD"
            },
            "CAMKMT": {
                "id": 26276,
                "inheritance": "AD"
            },
            "KANSL1L": {
                "id": 26310,
                "inheritance": "AD"
            },
            "ASPRV1": {
                "id": 26321,
                "inheritance": "AD"
            },
            "C2orf48": {
                "id": 26322,
                "inheritance": "AD"
            },
            "C2orf50": {
                "id": 26324,
                "inheritance": "AD"
            },
            "ZNF385B": {
                "id": 26332,
                "inheritance": "AD"
            },
            "TEX37": {
                "id": 26341,
                "inheritance": "AD"
            },
            "ANKAR": {
                "id": 26350,
                "inheritance": "AD"
            },
            "DAW1": {
                "id": 26383,
                "inheritance": "AD"
            },
            "TMEM182": {
                "id": 26391,
                "inheritance": "AD"
            },
            "RFTN2": {
                "id": 26402,
                "inheritance": "AD"
            },
            "LINC01105": {
                "id": 26403,
                "inheritance": "AD"
            },
            "SLC16A14": {
                "id": 26417,
                "inheritance": "AD"
            },
            "TTC30B": {
                "id": 26425,
                "inheritance": "AD"
            },
            "KCTD18": {
                "id": 26446,
                "inheritance": "AD"
            },
            "CLHC1": {
                "id": 26453,
                "inheritance": "AD"
            },
            "SATB2-AS1": {
                "id": 26490,
                "inheritance": "AD"
            },
            "ZNF513": {
                "id": 26498,
                "inheritance": "AD"
            },
            "PUS10": {
                "id": 26505,
                "inheritance": "AD"
            },
            "CCDC140": {
                "id": 26514,
                "inheritance": "AD"
            },
            "CCDC138": {
                "id": 26531,
                "inheritance": "AD"
            },
            "RMDN2": {
                "id": 26567,
                "inheritance": "AD"
            },
            "UNC80": {
                "id": 26582,
                "inheritance": "AD"
            },
            "RTP5": {
                "id": 26585,
                "inheritance": "AD"
            },
            "TMEM17": {
                "id": 26623,
                "inheritance": "AD"
            },
            "WDSUB1": {
                "id": 26697,
                "inheritance": "AD"
            },
            "ERFE": {
                "id": 26727,
                "inheritance": "AD"
            },
            "FBLN7": {
                "id": 26740,
                "inheritance": "AD"
            },
            "TYW5": {
                "id": 26754,
                "inheritance": "AD"
            },
            "LCLAT1": {
                "id": 26756,
                "inheritance": "AD"
            },
            "GPATCH11": {
                "id": 26768,
                "inheritance": "AD"
            },
            "LINC01106": {
                "id": 26769,
                "inheritance": "AD"
            },
            "AMER3": {
                "id": 26771,
                "inheritance": "AD"
            },
            "DARS": {
                "id": 2678,
                "inheritance": "AD"
            },
            "C2orf69": {
                "id": 26799,
                "inheritance": "AD"
            },
            "CCDC141": {
                "id": 26821,
                "inheritance": "AD"
            },
            "CCDC150": {
                "id": 26834,
                "inheritance": "AD"
            },
            "SLC38A11": {
                "id": 26836,
                "inheritance": "AD"
            },
            "STPG4": {
                "id": 26850,
                "inheritance": "AD"
            },
            "C2orf73": {
                "id": 26861,
                "inheritance": "AD"
            },
            "CCNYL1": {
                "id": 26868,
                "inheritance": "AD"
            },
            "CKAP2L": {
                "id": 26877,
                "inheritance": "AD"
            },
            "GEN1": {
                "id": 26881,
                "inheritance": "AD"
            },
            "DBI": {
                "id": 2690,
                "inheritance": "AD"
            },
            "TRABD2A": {
                "id": 27013,
                "inheritance": "AD"
            },
            "LYG1": {
                "id": 27014,
                "inheritance": "AD"
            },
            "CMPK2": {
                "id": 27015,
                "inheritance": "AD"
            },
            "FAM168B": {
                "id": 27016,
                "inheritance": "AD"
            },
            "C2orf76": {
                "id": 27017,
                "inheritance": "AD"
            },
            "LYPD6B": {
                "id": 27018,
                "inheritance": "AD"
            },
            "FBXO36": {
                "id": 27020,
                "inheritance": "AD"
            },
            "DCTN1": {
                "id": 2711,
                "inheritance": "AD"
            },
            "LINC01102": {
                "id": 27165,
                "inheritance": "AD"
            },
            "GPAT2": {
                "id": 27168,
                "inheritance": "AD"
            },
            "GAREM2": {
                "id": 27172,
                "inheritance": "AD"
            },
            "LINC00608": {
                "id": 27179,
                "inheritance": "AD"
            },
            "ASAP2": {
                "id": 2721,
                "inheritance": "AD"
            },
            "UBXN2A": {
                "id": 27265,
                "inheritance": "AD"
            },
            "SMIM37": {
                "id": 27339,
                "inheritance": "AD"
            },
            "DDX1": {
                "id": 2734,
                "inheritance": "AD"
            },
            "NIFK-AS1": {
                "id": 27385,
                "inheritance": "AD"
            },
            "DDX18": {
                "id": 2741,
                "inheritance": "AD"
            },
            "C2orf72": {
                "id": 27418,
                "inheritance": "AD"
            },
            "KLHL23": {
                "id": 27506,
                "inheritance": "AD"
            },
            "NT5DC4": {
                "id": 27678,
                "inheritance": "AD"
            },
            "ALKAL2": {
                "id": 27683,
                "inheritance": "AD"
            },
            "LINC01305": {
                "id": 27690,
                "inheritance": "AD"
            },
            "IAH1": {
                "id": 27696,
                "inheritance": "AD"
            },
            "DES": {
                "id": 2770,
                "inheritance": "AD"
            },
            "DFNA16": {
                "id": 2789,
                "inheritance": "AD"
            },
            "FAM201B": {
                "id": 27933,
                "inheritance": "AD"
            },
            "SPOPL": {
                "id": 27934,
                "inheritance": "AD"
            },
            "MAP3K20-AS1": {
                "id": 27935,
                "inheritance": "AD"
            },
            "MROH2A": {
                "id": 27936,
                "inheritance": "AD"
            },
            "ESPNL": {
                "id": 27937,
                "inheritance": "AD"
            },
            "C2orf70": {
                "id": 27938,
                "inheritance": "AD"
            },
            "LINC00299": {
                "id": 27940,
                "inheritance": "AD"
            },
            "LINC02579": {
                "id": 27942,
                "inheritance": "AD"
            },
            "SPATA3-AS1": {
                "id": 28013,
                "inheritance": "AD"
            },
            "WDPCP": {
                "id": 28027,
                "inheritance": "AD"
            },
            "FAM178B": {
                "id": 28036,
                "inheritance": "AD"
            },
            "RNF181": {
                "id": 28037,
                "inheritance": "AD"
            },
            "KRCC1": {
                "id": 28039,
                "inheritance": "AD"
            },
            "FAM95A": {
                "id": 28069,
                "inheritance": "AD"
            },
            "RAPGEF4-AS1": {
                "id": 28081,
                "inheritance": "AD"
            },
            "GCC2-AS1": {
                "id": 28126,
                "inheritance": "AD"
            },
            "GLB1L": {
                "id": 28129,
                "inheritance": "AD"
            },
            "TMEM177": {
                "id": 28143,
                "inheritance": "AD"
            },
            "YIPF4": {
                "id": 28145,
                "inheritance": "AD"
            },
            "CENPO": {
                "id": 28152,
                "inheritance": "AD"
            },
            "MFSD9": {
                "id": 28158,
                "inheritance": "AD"
            },
            "CCDC115": {
                "id": 28178,
                "inheritance": "AD"
            },
            "C2orf88": {
                "id": 28191,
                "inheritance": "AD"
            },
            "ADRA2B": {
                "id": 282,
                "inheritance": "AD"
            },
            "TET3": {
                "id": 28313,
                "inheritance": "AD"
            },
            "PHOSPHO2": {
                "id": 28316,
                "inheritance": "AD"
            },
            "DFNB27": {
                "id": 2833,
                "inheritance": "AD"
            },
            "D2HGDH": {
                "id": 28358,
                "inheritance": "AD"
            },
            "VWA3B": {
                "id": 28385,
                "inheritance": "AD"
            },
            "LYPD1": {
                "id": 28431,
                "inheritance": "AD"
            },
            "C2orf15": {
                "id": 28436,
                "inheritance": "AD"
            },
            "RETREG2": {
                "id": 28450,
                "inheritance": "AD"
            },
            "PQLC3": {
                "id": 28503,
                "inheritance": "AD"
            },
            "DGKD": {
                "id": 2851,
                "inheritance": "AD"
            },
            "TMEM178A": {
                "id": 28517,
                "inheritance": "AD"
            },
            "CYP1B1-AS1": {
                "id": 28543,
                "inheritance": "AD"
            },
            "TEX44": {
                "id": 28563,
                "inheritance": "AD"
            },
            "DGUOK": {
                "id": 2858,
                "inheritance": "AD"
            },
            "FAM126B": {
                "id": 28593,
                "inheritance": "AD"
            },
            "ANKRD39": {
                "id": 28640,
                "inheritance": "AD"
            },
            "DIS3L2": {
                "id": 28648,
                "inheritance": "AD"
            },
            "AMMECR1L": {
                "id": 28658,
                "inheritance": "AD"
            },
            "LINC00471": {
                "id": 28668,
                "inheritance": "AD"
            },
            "PRR30": {
                "id": 28677,
                "inheritance": "AD"
            },
            "CYTOR": {
                "id": 28717,
                "inheritance": "AD"
            },
            "APLF": {
                "id": 28724,
                "inheritance": "AD"
            },
            "LYPD6": {
                "id": 28751,
                "inheritance": "AD"
            },
            "SFT2D3": {
                "id": 28767,
                "inheritance": "AD"
            },
            "C2orf49": {
                "id": 28772,
                "inheritance": "AD"
            },
            "MTERF4": {
                "id": 28785,
                "inheritance": "AD"
            },
            "NDUFAF7": {
                "id": 28816,
                "inheritance": "AD"
            },
            "OLA1": {
                "id": 28833,
                "inheritance": "AD"
            },
            "PDCL3": {
                "id": 28860,
                "inheritance": "AD"
            },
            "G6PC2": {
                "id": 28906,
                "inheritance": "AD"
            },
            "KRTCAP3": {
                "id": 28943,
                "inheritance": "AD"
            },
            "WDR43": {
                "id": 28945,
                "inheritance": "AD"
            },
            "EDAR": {
                "id": 2895,
                "inheritance": "AD"
            },
            "ARHGAP25": {
                "id": 28951,
                "inheritance": "AD"
            },
            "TTLL4": {
                "id": 28976,
                "inheritance": "AD"
            },
            "CEP68": {
                "id": 29076,
                "inheritance": "AD"
            },
            "OBSL1": {
                "id": 29092,
                "inheritance": "AD"
            },
            "DLX1": {
                "id": 2914,
                "inheritance": "AD"
            },
            "EHBP1": {
                "id": 29144,
                "inheritance": "AD"
            },
            "DLX2": {
                "id": 2915,
                "inheritance": "AD"
            },
            "EFR3B": {
                "id": 29155,
                "inheritance": "AD"
            },
            "FASTKD2": {
                "id": 29160,
                "inheritance": "AD"
            },
            "PAIP2B": {
                "id": 29200,
                "inheritance": "AD"
            },
            "ERMN": {
                "id": 29208,
                "inheritance": "AD"
            },
            "ATAD2B": {
                "id": 29230,
                "inheritance": "AD"
            },
            "WDR35": {
                "id": 29250,
                "inheritance": "AD"
            },
            "PPP4R3B": {
                "id": 29267,
                "inheritance": "AD"
            },
            "MARCH4": {
                "id": 29269,
                "inheritance": "AD"
            },
            "HEATR5B": {
                "id": 29273,
                "inheritance": "AD"
            },
            "NYAP2": {
                "id": 29291,
                "inheritance": "AD"
            },
            "ZDBF2": {
                "id": 29313,
                "inheritance": "AD"
            },
            "CWC22": {
                "id": 29322,
                "inheritance": "AD"
            },
            "ANKRD36B": {
                "id": 29333,
                "inheritance": "AD"
            },
            "THSD7B": {
                "id": 29348,
                "inheritance": "AD"
            },
            "SELENOI": {
                "id": 29361,
                "inheritance": "AD"
            },
            "TANC1": {
                "id": 29364,
                "inheritance": "AD"
            },
            "ITPRIPL1": {
                "id": 29371,
                "inheritance": "AD"
            },
            "ZNF512": {
                "id": 29380,
                "inheritance": "AD"
            },
            "KIAA1841": {
                "id": 29387,
                "inheritance": "AD"
            },
            "CCDC85A": {
                "id": 29400,
                "inheritance": "AD"
            },
            "KLHL29": {
                "id": 29404,
                "inheritance": "AD"
            },
            "FBXO41": {
                "id": 29409,
                "inheritance": "AD"
            },
            "FAM171B": {
                "id": 29412,
                "inheritance": "AD"
            },
            "PJVK": {
                "id": 29502,
                "inheritance": "AD"
            },
            "KIDINS220": {
                "id": 29508,
                "inheritance": "AD"
            },
            "DNAH6": {
                "id": 2951,
                "inheritance": "AD"
            },
            "ZC3H15": {
                "id": 29528,
                "inheritance": "AD"
            },
            "LBH": {
                "id": 29532,
                "inheritance": "AD"
            },
            "SH3YL1": {
                "id": 29546,
                "inheritance": "AD"
            },
            "EFHD1": {
                "id": 29556,
                "inheritance": "AD"
            },
            "LIPT1": {
                "id": 29569,
                "inheritance": "AD"
            },
            "ALMS1P1": {
                "id": 29586,
                "inheritance": "AD"
            },
            "REG3G": {
                "id": 29595,
                "inheritance": "AD"
            },
            "CISD1P1": {
                "id": 29611,
                "inheritance": "AD"
            },
            "LYG2": {
                "id": 29615,
                "inheritance": "AD"
            },
            "DYNC1I2": {
                "id": 2964,
                "inheritance": "AD"
            },
            "MLPH": {
                "id": 29643,
                "inheritance": "AD"
            },
            "MRPL36P1": {
                "id": 29708,
                "inheritance": "AD"
            },
            "MRPL45P1": {
                "id": 29715,
                "inheritance": "AD"
            },
            "MRPL50P1": {
                "id": 29719,
                "inheritance": "AD"
            },
            "MRPL50P2": {
                "id": 29720,
                "inheritance": "AD"
            },
            "MRPS18BP2": {
                "id": 29742,
                "inheritance": "AD"
            },
            "DAP3P2": {
                "id": 29762,
                "inheritance": "AD"
            },
            "DNMT3A": {
                "id": 2978,
                "inheritance": "AD"
            },
            "NUP35": {
                "id": 29797,
                "inheritance": "AD"
            },
            "DNPEP": {
                "id": 2981,
                "inheritance": "AD"
            },
            "SAP130": {
                "id": 29813,
                "inheritance": "AD"
            },
            "NCKAP5": {
                "id": 29847,
                "inheritance": "AD"
            },
            "HECW2": {
                "id": 29853,
                "inheritance": "AD"
            },
            "CHMP3": {
                "id": 29865,
                "inheritance": "AD"
            },
            "DOK1": {
                "id": 2990,
                "inheritance": "AD"
            },
            "C1D": {
                "id": 29911,
                "inheritance": "AD"
            },
            "NOP58": {
                "id": 29926,
                "inheritance": "AD"
            },
            "PLB1": {
                "id": 30041,
                "inheritance": "AD"
            },
            "LIMS3": {
                "id": 30047,
                "inheritance": "AD"
            },
            "DPP4": {
                "id": 3009,
                "inheritance": "AD"
            },
            "SF3B6": {
                "id": 30096,
                "inheritance": "AD"
            },
            "CPS1-IT1": {
                "id": 30102,
                "inheritance": "AD"
            },
            "PCGEM1": {
                "id": 30145,
                "inheritance": "AD"
            },
            "PSMB3P2": {
                "id": 30150,
                "inheritance": "AD"
            },
            "MORN2": {
                "id": 30166,
                "inheritance": "AD"
            },
            "PDIA6": {
                "id": 30168,
                "inheritance": "AD"
            },
            "POTEKP": {
                "id": 30182,
                "inheritance": "AD"
            },
            "PREPL": {
                "id": 30228,
                "inheritance": "AD"
            },
            "NAT8B": {
                "id": 30235,
                "inheritance": "AD"
            },
            "SNRNP27": {
                "id": 30240,
                "inheritance": "AD"
            },
            "DRD5P1": {
                "id": 3027,
                "inheritance": "AD"
            },
            "RAB6D": {
                "id": 30272,
                "inheritance": "AD"
            },
            "DNAJC27": {
                "id": 30290,
                "inheritance": "AD"
            },
            "RBKS": {
                "id": 30325,
                "inheritance": "AD"
            },
            "ZBTB8OSP2": {
                "id": 30326,
                "inheritance": "AD"
            },
            "TMEM131": {
                "id": 30366,
                "inheritance": "AD"
            },
            "SCRN3": {
                "id": 30382,
                "inheritance": "AD"
            },
            "IFT172": {
                "id": 30391,
                "inheritance": "AD"
            },
            "SH2D6": {
                "id": 30439,
                "inheritance": "AD"
            },
            "UBR3": {
                "id": 30467,
                "inheritance": "AD"
            },
            "METTL21A": {
                "id": 30476,
                "inheritance": "AD"
            },
            "PLEKHH2": {
                "id": 30506,
                "inheritance": "AD"
            },
            "CFAP36": {
                "id": 30540,
                "inheritance": "AD"
            },
            "ADI1": {
                "id": 30576,
                "inheritance": "AD"
            },
            "DTNB": {
                "id": 3058,
                "inheritance": "AD"
            },
            "PPP1R21": {
                "id": 30595,
                "inheritance": "AD"
            },
            "DTYMK": {
                "id": 3061,
                "inheritance": "AD"
            },
            "SPDYA": {
                "id": 30613,
                "inheritance": "AD"
            },
            "SPHKAP": {
                "id": 30619,
                "inheritance": "AD"
            },
            "SUPT7L": {
                "id": 30632,
                "inheritance": "AD"
            },
            "STON1-GTF2A1L": {
                "id": 30651,
                "inheritance": "AD"
            },
            "DUSP11": {
                "id": 3066,
                "inheritance": "AD"
            },
            "DUSP2": {
                "id": 3068,
                "inheritance": "AD"
            },
            "SP9": {
                "id": 30690,
                "inheritance": "AD"
            },
            "TEX261": {
                "id": 30712,
                "inheritance": "AD"
            },
            "GTF2A1L": {
                "id": 30727,
                "inheritance": "AD"
            },
            "CSRNP3": {
                "id": 30729,
                "inheritance": "AD"
            },
            "SERTAD2": {
                "id": 30784,
                "inheritance": "AD"
            },
            "EIF5B": {
                "id": 30793,
                "inheritance": "AD"
            },
            "TRIB2": {
                "id": 30809,
                "inheritance": "AD"
            },
            "SGO2": {
                "id": 30812,
                "inheritance": "AD"
            },
            "CD302": {
                "id": 30843,
                "inheritance": "AD"
            },
            "IMP4": {
                "id": 30856,
                "inheritance": "AD"
            },
            "SNRNP200": {
                "id": 30859,
                "inheritance": "AD"
            },
            "RSAD2": {
                "id": 30908,
                "inheritance": "AD"
            },
            "ZC3H8": {
                "id": 30941,
                "inheritance": "AD"
            },
            "RNF144A-AS1": {
                "id": 30963,
                "inheritance": "AD"
            },
            "DYSF": {
                "id": 3097,
                "inheritance": "AD"
            },
            "ZSWIM2": {
                "id": 30990,
                "inheritance": "AD"
            },
            "TEKT4": {
                "id": 31012,
                "inheritance": "AD"
            },
            "KLHL30-AS1": {
                "id": 31018,
                "inheritance": "AD"
            },
            "MYADML": {
                "id": 31019,
                "inheritance": "AD"
            },
            "FABP5P14": {
                "id": 31065,
                "inheritance": "AD"
            },
            "FABP5P10": {
                "id": 31066,
                "inheritance": "AD"
            },
            "SLC2AXP1": {
                "id": 31077,
                "inheritance": "AD"
            },
            "YWHAZP2": {
                "id": 31078,
                "inheritance": "AD"
            },
            "DFNB47": {
                "id": 31086,
                "inheritance": "AD"
            },
            "DYX3": {
                "id": 3110,
                "inheritance": "AD"
            },
            "PFN4": {
                "id": 31103,
                "inheritance": "AD"
            },
            "E2F3P2": {
                "id": 3117,
                "inheritance": "AD"
            },
            "E2F6": {
                "id": 3120,
                "inheritance": "AD"
            },
            "OR9S24P": {
                "id": 31288,
                "inheritance": "AD"
            },
            "ECEL1": {
                "id": 3147,
                "inheritance": "AD"
            },
            "MIR10B": {
                "id": 31498,
                "inheritance": "AD"
            },
            "MIR128-1": {
                "id": 31510,
                "inheritance": "AD"
            },
            "MIR149": {
                "id": 31536,
                "inheritance": "AD"
            },
            "MIR153-1": {
                "id": 31539,
                "inheritance": "AD"
            },
            "MIR216A": {
                "id": 31593,
                "inheritance": "AD"
            },
            "MIR217": {
                "id": 31594,
                "inheritance": "AD"
            },
            "MIR26B": {
                "id": 31612,
                "inheritance": "AD"
            },
            "ANO7": {
                "id": 31677,
                "inheritance": "AD"
            },
            "ASTL": {
                "id": 31704,
                "inheritance": "AD"
            },
            "NOTO": {
                "id": 31839,
                "inheritance": "AD"
            },
            "MIR375": {
                "id": 31868,
                "inheritance": "AD"
            },
            "EEF1A1P12": {
                "id": 3195,
                "inheritance": "AD"
            },
            "EEF1B2": {
                "id": 3208,
                "inheritance": "AD"
            },
            "DPRXP1": {
                "id": 32167,
                "inheritance": "AD"
            },
            "EFEMP1": {
                "id": 3218,
                "inheritance": "AD"
            },
            "DUXAP1": {
                "id": 32180,
                "inheritance": "AD"
            },
            "UGT1A13P": {
                "id": 32191,
                "inheritance": "AD"
            },
            "NMS": {
                "id": 32203,
                "inheritance": "AD"
            },
            "CHAC2": {
                "id": 32363,
                "inheritance": "AD"
            },
            "DNAJB3": {
                "id": 32397,
                "inheritance": "AD"
            },
            "EGR4": {
                "id": 3241,
                "inheritance": "AD"
            },
            "RGPD1": {
                "id": 32414,
                "inheritance": "AD"
            },
            "RGPD2": {
                "id": 32415,
                "inheritance": "AD"
            },
            "RGPD3": {
                "id": 32416,
                "inheritance": "AD"
            },
            "RGPD4": {
                "id": 32417,
                "inheritance": "AD"
            },
            "RGPD5": {
                "id": 32418,
                "inheritance": "AD"
            },
            "RGPD6": {
                "id": 32419,
                "inheritance": "AD"
            },
            "EHD3": {
                "id": 3244,
                "inheritance": "AD"
            },
            "OST4": {
                "id": 32483,
                "inheritance": "AD"
            },
            "EIF2AK3": {
                "id": 3255,
                "inheritance": "AD"
            },
            "MYP12": {
                "id": 32551,
                "inheritance": "AD"
            },
            "SCARNA5": {
                "id": 32561,
                "inheritance": "AD"
            },
            "SCARNA6": {
                "id": 32562,
                "inheritance": "AD"
            },
            "METAP1D": {
                "id": 32583,
                "inheritance": "AD"
            },
            "EIF2B4": {
                "id": 3260,
                "inheritance": "AD"
            },
            "SNORA41": {
                "id": 32634,
                "inheritance": "AD"
            },
            "SNORA75": {
                "id": 32661,
                "inheritance": "AD"
            },
            "MYCNUT": {
                "id": 32684,
                "inheritance": "AD"
            },
            "DCDC2C": {
                "id": 32696,
                "inheritance": "AD"
            },
            "AGPS": {
                "id": 327,
                "inheritance": "AD"
            },
            "SNORD11": {
                "id": 32707,
                "inheritance": "AD"
            },
            "SLC7A15P": {
                "id": 32724,
                "inheritance": "AD"
            },
            "SNORD70": {
                "id": 32731,
                "inheritance": "AD"
            },
            "SNORD89": {
                "id": 32750,
                "inheritance": "AD"
            },
            "SNORD92": {
                "id": 32754,
                "inheritance": "AD"
            },
            "SNORD94": {
                "id": 32756,
                "inheritance": "AD"
            },
            "PNO1": {
                "id": 32790,
                "inheritance": "AD"
            },
            "MIR558": {
                "id": 32814,
                "inheritance": "AD"
            },
            "MIR559": {
                "id": 32815,
                "inheritance": "AD"
            },
            "MIR561": {
                "id": 32817,
                "inheritance": "AD"
            },
            "MIR562": {
                "id": 32818,
                "inheritance": "AD"
            },
            "EIF4E2": {
                "id": 3293,
                "inheritance": "AD"
            },
            "ANKRD36C": {
                "id": 32946,
                "inheritance": "AD"
            },
            "SMPD4": {
                "id": 32949,
                "inheritance": "AD"
            },
            "TTC32": {
                "id": 32954,
                "inheritance": "AD"
            },
            "WASH2P": {
                "id": 33145,
                "inheritance": "AD"
            },
            "MZT2A": {
                "id": 33187,
                "inheritance": "AD"
            },
            "ZNF806": {
                "id": 33228,
                "inheritance": "AD"
            },
            "DUSP28": {
                "id": 33237,
                "inheritance": "AD"
            },
            "MACOM": {
                "id": 33244,
                "inheritance": "AD"
            },
            "TRA-AGC8-1": {
                "id": 33254,
                "inheritance": "AD"
            },
            "FAM110C": {
                "id": 33340,
                "inheritance": "AD"
            },
            "KRT8P10": {
                "id": 33364,
                "inheritance": "AD"
            },
            "KRT8P15": {
                "id": 33367,
                "inheritance": "AD"
            },
            "KRT8P30": {
                "id": 33382,
                "inheritance": "AD"
            },
            "KRT18P19": {
                "id": 33387,
                "inheritance": "AD"
            },
            "KRT18P26": {
                "id": 33395,
                "inheritance": "AD"
            },
            "KRT18P29": {
                "id": 33398,
                "inheritance": "AD"
            },
            "EMX1": {
                "id": 3340,
                "inheritance": "AD"
            },
            "KRT18P33": {
                "id": 33402,
                "inheritance": "AD"
            },
            "KRT18P39": {
                "id": 33408,
                "inheritance": "AD"
            },
            "KRT18P46": {
                "id": 33416,
                "inheritance": "AD"
            },
            "EN1": {
                "id": 3342,
                "inheritance": "AD"
            },
            "SULT6B1": {
                "id": 33433,
                "inheritance": "AD"
            },
            "GGT8P": {
                "id": 33438,
                "inheritance": "AD"
            },
            "KIAA1211L": {
                "id": 33454,
                "inheritance": "AD"
            },
            "CYP27C1": {
                "id": 33480,
                "inheritance": "AD"
            },
            "ELF2P4": {
                "id": 33540,
                "inheritance": "AD"
            },
            "AK2P2": {
                "id": 33542,
                "inheritance": "AD"
            },
            "SULT1C3": {
                "id": 33543,
                "inheritance": "AD"
            },
            "SULT1C2P1": {
                "id": 33545,
                "inheritance": "AD"
            },
            "GNG5P4": {
                "id": 33553,
                "inheritance": "AD"
            },
            "SNORD11B": {
                "id": 33571,
                "inheritance": "AD"
            },
            "SNORD105B": {
                "id": 33572,
                "inheritance": "AD"
            },
            "FAM138B": {
                "id": 33582,
                "inheritance": "AD"
            },
            "ANKRD36BP2": {
                "id": 33607,
                "inheritance": "AD"
            },
            "SNORA36C": {
                "id": 33616,
                "inheritance": "AD"
            },
            "SNORA70B": {
                "id": 33618,
                "inheritance": "AD"
            },
            "MIR216B": {
                "id": 33668,
                "inheritance": "AD"
            },
            "MIR933": {
                "id": 33676,
                "inheritance": "AD"
            },
            "NEMP2": {
                "id": 33700,
                "inheritance": "AD"
            },
            "CIB4": {
                "id": 33703,
                "inheritance": "AD"
            },
            "TMEM198": {
                "id": 33704,
                "inheritance": "AD"
            },
            "TOGARAM2": {
                "id": 33715,
                "inheritance": "AD"
            },
            "CFAP221": {
                "id": 33720,
                "inheritance": "AD"
            },
            "EPAS1": {
                "id": 3374,
                "inheritance": "AD"
            },
            "RESP18": {
                "id": 33762,
                "inheritance": "AD"
            },
            "SNORC": {
                "id": 33763,
                "inheritance": "AD"
            },
            "PTRHD1": {
                "id": 33782,
                "inheritance": "AD"
            },
            "C2orf66": {
                "id": 33809,
                "inheritance": "AD"
            },
            "C2orf27B": {
                "id": 33824,
                "inheritance": "AD"
            },
            "COA5": {
                "id": 33848,
                "inheritance": "AD"
            },
            "FBXO48": {
                "id": 33857,
                "inheritance": "AD"
            },
            "PRR21": {
                "id": 33866,
                "inheritance": "AD"
            },
            "EPHA4": {
                "id": 3388,
                "inheritance": "AD"
            },
            "POTEE": {
                "id": 33895,
                "inheritance": "AD"
            },
            "POTEF": {
                "id": 33905,
                "inheritance": "AD"
            },
            "IMPDH1P7": {
                "id": 33962,
                "inheritance": "AD"
            },
            "IMPDH1P10": {
                "id": 33965,
                "inheritance": "AD"
            },
            "SUPT4H1P1": {
                "id": 33981,
                "inheritance": "AD"
            },
            "GAMTP1": {
                "id": 33982,
                "inheritance": "AD"
            },
            "CFC1B": {
                "id": 33983,
                "inheritance": "AD"
            },
            "RNF11P1": {
                "id": 33988,
                "inheritance": "AD"
            },
            "PLEKHM3": {
                "id": 34006,
                "inheritance": "AD"
            },
            "RNU4ATAC": {
                "id": 34016,
                "inheritance": "AD"
            },
            "DFNA58": {
                "id": 34029,
                "inheritance": "AD"
            },
            "RNY4P7": {
                "id": 34056,
                "inheritance": "AD"
            },
            "RNY4P15": {
                "id": 34065,
                "inheritance": "AD"
            },
            "RNY4P19": {
                "id": 34069,
                "inheritance": "AD"
            },
            "RNY5P2": {
                "id": 34083,
                "inheritance": "AD"
            },
            "RNU7-2P": {
                "id": 34098,
                "inheritance": "AD"
            },
            "AGXT": {
                "id": 341,
                "inheritance": "AD"
            },
            "RNU7-9P": {
                "id": 34105,
                "inheritance": "AD"
            },
            "RNU7-44P": {
                "id": 34140,
                "inheritance": "AD"
            },
            "RNU7-45P": {
                "id": 34141,
                "inheritance": "AD"
            },
            "RNU7-46P": {
                "id": 34142,
                "inheritance": "AD"
            },
            "RNU7-64P": {
                "id": 34160,
                "inheritance": "AD"
            },
            "RNU7-81P": {
                "id": 34177,
                "inheritance": "AD"
            },
            "RNU6-5P": {
                "id": 34249,
                "inheritance": "AD"
            },
            "RNU6-31P": {
                "id": 34250,
                "inheritance": "AD"
            },
            "ERBB4": {
                "id": 3432,
                "inheritance": "AD"
            },
            "SNAR-H": {
                "id": 34329,
                "inheritance": "AD"
            },
            "C2orf78": {
                "id": 34349,
                "inheritance": "AD"
            },
            "ERCC3": {
                "id": 3435,
                "inheritance": "AD"
            },
            "C2orf81": {
                "id": 34350,
                "inheritance": "AD"
            },
            "C2orf80": {
                "id": 34352,
                "inheritance": "AD"
            },
            "C2orf68": {
                "id": 34353,
                "inheritance": "AD"
            },
            "SNORA80B": {
                "id": 34355,
                "inheritance": "AD"
            },
            "SNORA70F": {
                "id": 34358,
                "inheritance": "AD"
            },
            "PRORSD1P": {
                "id": 34379,
                "inheritance": "AD"
            },
            "C2orf71": {
                "id": 34383,
                "inheritance": "AD"
            },
            "RAD51AP2": {
                "id": 34417,
                "inheritance": "AD"
            },
            "FAM228A": {
                "id": 34418,
                "inheritance": "AD"
            },
            "C2orf74": {
                "id": 34439,
                "inheritance": "AD"
            },
            "NMTRS-TGA1-1": {
                "id": 34614,
                "inheritance": "AD"
            },
            "NMTRQ-TTG3-1": {
                "id": 34778,
                "inheritance": "AD"
            },
            "ETM2": {
                "id": 3487,
                "inheritance": "AD"
            },
            "NMTRQ-TTG7-1": {
                "id": 35015,
                "inheritance": "AD"
            },
            "NMTRQ-TTG9-1": {
                "id": 35022,
                "inheritance": "AD"
            },
            "TRG-CCC7-1": {
                "id": 35030,
                "inheritance": "AD"
            },
            "TRE-CTC13-1": {
                "id": 35031,
                "inheritance": "AD"
            },
            "TRQ-TTG5-1": {
                "id": 35046,
                "inheritance": "AD"
            },
            "TRP-AGG5-1": {
                "id": 35055,
                "inheritance": "AD"
            },
            "TRE-CTC7-1": {
                "id": 35065,
                "inheritance": "AD"
            },
            "TRE-CTC9-1": {
                "id": 35069,
                "inheritance": "AD"
            },
            "EVX2": {
                "id": 3507,
                "inheritance": "AD"
            },
            "TRQ-CTG16-1": {
                "id": 35078,
                "inheritance": "AD"
            },
            "TRK-TTT15-1": {
                "id": 35079,
                "inheritance": "AD"
            },
            "TRE-TTC9-1": {
                "id": 35093,
                "inheritance": "AD"
            },
            "NMTRL-TAA2-1": {
                "id": 35097,
                "inheritance": "AD"
            },
            "NMTRS-TGA2-1": {
                "id": 35100,
                "inheritance": "AD"
            },
            "TRE-CTC15-1": {
                "id": 35104,
                "inheritance": "AD"
            },
            "TRP-AGG4-1": {
                "id": 35107,
                "inheritance": "AD"
            },
            "FOXI3": {
                "id": 35123,
                "inheritance": "AD"
            },
            "BOK-AS1": {
                "id": 35125,
                "inheritance": "AD"
            },
            "ZNF863P": {
                "id": 35156,
                "inheritance": "AD"
            },
            "MIR4435-2HG": {
                "id": 35163,
                "inheritance": "AD"
            },
            "ANKRD30BL": {
                "id": 35167,
                "inheritance": "AD"
            },
            "EXTL2P1": {
                "id": 3517,
                "inheritance": "AD"
            },
            "DFNA60": {
                "id": 35170,
                "inheritance": "AD"
            },
            "DFNB80": {
                "id": 35185,
                "inheritance": "AD"
            },
            "MIR1301": {
                "id": 35253,
                "inheritance": "AD"
            },
            "MIR663B": {
                "id": 35270,
                "inheritance": "AD"
            },
            "MIR1285-2": {
                "id": 35278,
                "inheritance": "AD"
            },
            "MIR1302-3": {
                "id": 35295,
                "inheritance": "AD"
            },
            "MIR1302-4": {
                "id": 35296,
                "inheritance": "AD"
            },
            "MIR548F2": {
                "id": 35306,
                "inheritance": "AD"
            },
            "MIR1244-1": {
                "id": 35310,
                "inheritance": "AD"
            },
            "MIR1245A": {
                "id": 35311,
                "inheritance": "AD"
            },
            "MIR1246": {
                "id": 35312,
                "inheritance": "AD"
            },
            "MIR1258": {
                "id": 35323,
                "inheritance": "AD"
            },
            "MIR1471": {
                "id": 35380,
                "inheritance": "AD"
            },
            "UBTFL3": {
                "id": 35402,
                "inheritance": "AD"
            },
            "UBTFL5": {
                "id": 35405,
                "inheritance": "AD"
            },
            "UBTFL6": {
                "id": 35406,
                "inheritance": "AD"
            },
            "EML6": {
                "id": 35412,
                "inheritance": "AD"
            },
            "SHFM5": {
                "id": 35421,
                "inheritance": "AD"
            },
            "TTC39DP": {
                "id": 35451,
                "inheritance": "AD"
            },
            "SLC25A5P2": {
                "id": 35470,
                "inheritance": "AD"
            },
            "RPL31P14": {
                "id": 35477,
                "inheritance": "AD"
            },
            "RPS12P3": {
                "id": 35500,
                "inheritance": "AD"
            },
            "RPL26P15": {
                "id": 35512,
                "inheritance": "AD"
            },
            "FABP1": {
                "id": 3555,
                "inheritance": "AD"
            },
            "RPL27AP3": {
                "id": 35553,
                "inheritance": "AD"
            },
            "RPL23AP26": {
                "id": 35592,
                "inheritance": "AD"
            },
            "RPL22P7": {
                "id": 35602,
                "inheritance": "AD"
            },
            "RPL22P11": {
                "id": 35603,
                "inheritance": "AD"
            },
            "RPSAP28": {
                "id": 35612,
                "inheritance": "AD"
            },
            "RPL23AP30": {
                "id": 35617,
                "inheritance": "AD"
            },
            "RPS15AP15": {
                "id": 35640,
                "inheritance": "AD"
            },
            "RPL30P2": {
                "id": 35642,
                "inheritance": "AD"
            },
            "RPL23AP37": {
                "id": 35664,
                "inheritance": "AD"
            },
            "RPS12P4": {
                "id": 35670,
                "inheritance": "AD"
            },
            "RPL13AP12": {
                "id": 35673,
                "inheritance": "AD"
            },
            "RPL31P30": {
                "id": 35679,
                "inheritance": "AD"
            },
            "RPL23AP36": {
                "id": 35685,
                "inheritance": "AD"
            },
            "ACSL3": {
                "id": 3570,
                "inheritance": "AD"
            },
            "RPL21P37": {
                "id": 35704,
                "inheritance": "AD"
            },
            "RPS15P4": {
                "id": 35712,
                "inheritance": "AD"
            },
            "RPL10P5": {
                "id": 35724,
                "inheritance": "AD"
            },
            "RPS13P4": {
                "id": 35731,
                "inheritance": "AD"
            },
            "RPS27AP7": {
                "id": 35735,
                "inheritance": "AD"
            },
            "RPS24P7": {
                "id": 35737,
                "inheritance": "AD"
            },
            "RPL15P5": {
                "id": 35746,
                "inheritance": "AD"
            },
            "RPL23P5": {
                "id": 35747,
                "inheritance": "AD"
            },
            "RPS2P17": {
                "id": 35764,
                "inheritance": "AD"
            },
            "RPL23AP31": {
                "id": 35777,
                "inheritance": "AD"
            },
            "RPS26P18": {
                "id": 35782,
                "inheritance": "AD"
            },
            "RPS17P7": {
                "id": 35796,
                "inheritance": "AD"
            },
            "RPL17P14": {
                "id": 35806,
                "inheritance": "AD"
            },
            "RPL17P10": {
                "id": 35838,
                "inheritance": "AD"
            },
            "RPLP1P5": {
                "id": 35842,
                "inheritance": "AD"
            },
            "RPL39P15": {
                "id": 35856,
                "inheritance": "AD"
            },
            "RPL36AP13": {
                "id": 35877,
                "inheritance": "AD"
            },
            "FAP": {
                "id": 3590,
                "inheritance": "AD"
            },
            "RPL39P16": {
                "id": 35912,
                "inheritance": "AD"
            },
            "RPS16P2": {
                "id": 35928,
                "inheritance": "AD"
            },
            "RPS27P10": {
                "id": 35961,
                "inheritance": "AD"
            },
            "RPL7P14": {
                "id": 35984,
                "inheritance": "AD"
            },
            "RPS16P3": {
                "id": 35986,
                "inheritance": "AD"
            },
            "RPL31P16": {
                "id": 36001,
                "inheritance": "AD"
            },
            "RPL27P8": {
                "id": 36012,
                "inheritance": "AD"
            },
            "RPL23AP34": {
                "id": 36035,
                "inheritance": "AD"
            },
            "RPS20P13": {
                "id": 36071,
                "inheritance": "AD"
            },
            "RPS25P3": {
                "id": 36073,
                "inheritance": "AD"
            },
            "RPS20P11": {
                "id": 36084,
                "inheritance": "AD"
            },
            "RPS14P5": {
                "id": 36087,
                "inheritance": "AD"
            },
            "RPL21P30": {
                "id": 36091,
                "inheritance": "AD"
            },
            "RPL27P7": {
                "id": 36107,
                "inheritance": "AD"
            },
            "RPL27P5": {
                "id": 36120,
                "inheritance": "AD"
            },
            "RPL21P36": {
                "id": 36128,
                "inheritance": "AD"
            },
            "RPL26P14": {
                "id": 36184,
                "inheritance": "AD"
            },
            "RPS21P2": {
                "id": 36191,
                "inheritance": "AD"
            },
            "RPSAP26": {
                "id": 36195,
                "inheritance": "AD"
            },
            "RPL6P5": {
                "id": 36199,
                "inheritance": "AD"
            },
            "RPS28P4": {
                "id": 36208,
                "inheritance": "AD"
            },
            "RPL28P2": {
                "id": 36234,
                "inheritance": "AD"
            },
            "RPS24P6": {
                "id": 36240,
                "inheritance": "AD"
            },
            "RPL12P19": {
                "id": 36248,
                "inheritance": "AD"
            },
            "RPL37P13": {
                "id": 36255,
                "inheritance": "AD"
            },
            "RPL27AP4": {
                "id": 36262,
                "inheritance": "AD"
            },
            "RPL12P17": {
                "id": 36263,
                "inheritance": "AD"
            },
            "RPL18AP6": {
                "id": 36266,
                "inheritance": "AD"
            },
            "RPL5P8": {
                "id": 36290,
                "inheritance": "AD"
            },
            "RPL21P31": {
                "id": 36306,
                "inheritance": "AD"
            },
            "RPL19P5": {
                "id": 36325,
                "inheritance": "AD"
            },
            "RPL27P6": {
                "id": 36330,
                "inheritance": "AD"
            },
            "RPL31P15": {
                "id": 36339,
                "inheritance": "AD"
            },
            "RPL6P4": {
                "id": 36344,
                "inheritance": "AD"
            },
            "RPL22P12": {
                "id": 36345,
                "inheritance": "AD"
            },
            "RPL21P38": {
                "id": 36349,
                "inheritance": "AD"
            },
            "RPL23AP29": {
                "id": 36355,
                "inheritance": "AD"
            },
            "RPSAP24": {
                "id": 36362,
                "inheritance": "AD"
            },
            "RPS26P19": {
                "id": 36377,
                "inheritance": "AD"
            },
            "RPL17P13": {
                "id": 36378,
                "inheritance": "AD"
            },
            "RPL30P3": {
                "id": 36380,
                "inheritance": "AD"
            },
            "RPLP0P6": {
                "id": 36404,
                "inheritance": "AD"
            },
            "RPSAP25": {
                "id": 36405,
                "inheritance": "AD"
            },
            "RPL36AP16": {
                "id": 36416,
                "inheritance": "AD"
            },
            "RPS14P4": {
                "id": 36419,
                "inheritance": "AD"
            },
            "RPSAP22": {
                "id": 36435,
                "inheritance": "AD"
            },
            "RPS6P2": {
                "id": 36446,
                "inheritance": "AD"
            },
            "RPS2P18": {
                "id": 36449,
                "inheritance": "AD"
            },
            "RPS10P9": {
                "id": 36451,
                "inheritance": "AD"
            },
            "RPL37P11": {
                "id": 36459,
                "inheritance": "AD"
            },
            "RPS2P15": {
                "id": 36468,
                "inheritance": "AD"
            },
            "RPS20P9": {
                "id": 36472,
                "inheritance": "AD"
            },
            "RPS26P20": {
                "id": 36485,
                "inheritance": "AD"
            },
            "RPL23AP27": {
                "id": 36497,
                "inheritance": "AD"
            },
            "RPL17P11": {
                "id": 36509,
                "inheritance": "AD"
            },
            "RPS20P12": {
                "id": 36519,
                "inheritance": "AD"
            },
            "RPL21P34": {
                "id": 36529,
                "inheritance": "AD"
            },
            "RPL19P4": {
                "id": 36539,
                "inheritance": "AD"
            },
            "RPL5P9": {
                "id": 36557,
                "inheritance": "AD"
            },
            "RPL9P13": {
                "id": 36558,
                "inheritance": "AD"
            },
            "RPL22P10": {
                "id": 36559,
                "inheritance": "AD"
            },
            "RPLP0P7": {
                "id": 36578,
                "inheritance": "AD"
            },
            "RPL23AP35": {
                "id": 36580,
                "inheritance": "AD"
            },
            "RPL5P7": {
                "id": 36583,
                "inheritance": "AD"
            },
            "RPL7AP22": {
                "id": 36592,
                "inheritance": "AD"
            },
            "FEZ2": {
                "id": 3660,
                "inheritance": "AD"
            },
            "RPL39P14": {
                "id": 36609,
                "inheritance": "AD"
            },
            "RPS13P5": {
                "id": 36610,
                "inheritance": "AD"
            },
            "RPL7P12": {
                "id": 36611,
                "inheritance": "AD"
            },
            "RPL12P15": {
                "id": 36619,
                "inheritance": "AD"
            },
            "RPL38P2": {
                "id": 36620,
                "inheritance": "AD"
            },
            "RPS15AP14": {
                "id": 36629,
                "inheritance": "AD"
            },
            "RPL26P13": {
                "id": 36639,
                "inheritance": "AD"
            },
            "RPL36AP15": {
                "id": 36648,
                "inheritance": "AD"
            },
            "RPSAP27": {
                "id": 36650,
                "inheritance": "AD"
            },
            "RPS4XP5": {
                "id": 36670,
                "inheritance": "AD"
            },
            "RPL6P6": {
                "id": 36673,
                "inheritance": "AD"
            },
            "RPL23P4": {
                "id": 36678,
                "inheritance": "AD"
            },
            "RPL21P33": {
                "id": 36686,
                "inheritance": "AD"
            },
            "RPL23AP28": {
                "id": 36727,
                "inheritance": "AD"
            },
            "RPSAP23": {
                "id": 36742,
                "inheritance": "AD"
            },
            "RPL12P18": {
                "id": 36750,
                "inheritance": "AD"
            },
            "RPS17P8": {
                "id": 36772,
                "inheritance": "AD"
            },
            "RPS15AP13": {
                "id": 36774,
                "inheritance": "AD"
            },
            "RPL17P12": {
                "id": 36779,
                "inheritance": "AD"
            },
            "RPL22P8": {
                "id": 36782,
                "inheritance": "AD"
            },
            "RPL36AP14": {
                "id": 36788,
                "inheritance": "AD"
            },
            "RPS20P10": {
                "id": 36800,
                "inheritance": "AD"
            },
            "RPS28P5": {
                "id": 36802,
                "inheritance": "AD"
            },
            "RPL9P14": {
                "id": 36816,
                "inheritance": "AD"
            },
            "RPL7P13": {
                "id": 36861,
                "inheritance": "AD"
            },
            "RPS2P16": {
                "id": 36865,
                "inheritance": "AD"
            },
            "RPS13P3": {
                "id": 36866,
                "inheritance": "AD"
            },
            "RPL17P15": {
                "id": 36889,
                "inheritance": "AD"
            },
            "RPL21P35": {
                "id": 36900,
                "inheritance": "AD"
            },
            "RPS29P9": {
                "id": 36913,
                "inheritance": "AD"
            },
            "RPS29P8": {
                "id": 36915,
                "inheritance": "AD"
            },
            "RPL12P16": {
                "id": 36926,
                "inheritance": "AD"
            },
            "RPL3P5": {
                "id": 36934,
                "inheritance": "AD"
            },
            "RPLP1P4": {
                "id": 36939,
                "inheritance": "AD"
            },
            "RPS6P3": {
                "id": 36943,
                "inheritance": "AD"
            },
            "RPL23AP33": {
                "id": 36946,
                "inheritance": "AD"
            },
            "RPL37P10": {
                "id": 36951,
                "inheritance": "AD"
            },
            "RPL34P8": {
                "id": 36963,
                "inheritance": "AD"
            },
            "RPL21P32": {
                "id": 36978,
                "inheritance": "AD"
            },
            "RPL37P12": {
                "id": 36989,
                "inheritance": "AD"
            },
            "RPL31P17": {
                "id": 36995,
                "inheritance": "AD"
            },
            "RPS29P10": {
                "id": 37006,
                "inheritance": "AD"
            },
            "RPL11P1": {
                "id": 37021,
                "inheritance": "AD"
            },
            "RPL21P70": {
                "id": 37024,
                "inheritance": "AD"
            },
            "RPL29P8": {
                "id": 37026,
                "inheritance": "AD"
            },
            "FHL2": {
                "id": 3703,
                "inheritance": "AD"
            },
            "DYNLT3P2": {
                "id": 37081,
                "inheritance": "AD"
            },
            "POTEI": {
                "id": 37093,
                "inheritance": "AD"
            },
            "POTEJ": {
                "id": 37094,
                "inheritance": "AD"
            },
            "DDX11L2": {
                "id": 37103,
                "inheritance": "AD"
            },
            "FKBP1B": {
                "id": 3712,
                "inheritance": "AD"
            },
            "TRIM43B": {
                "id": 37146,
                "inheritance": "AD"
            },
            "ZEB2-AS1": {
                "id": 37149,
                "inheritance": "AD"
            },
            "FCMTE2": {
                "id": 37159,
                "inheritance": "AD"
            },
            "VWC2L": {
                "id": 37203,
                "inheritance": "AD"
            },
            "MFSD2B": {
                "id": 37207,
                "inheritance": "AD"
            },
            "FKBP7": {
                "id": 3723,
                "inheritance": "AD"
            },
            "ARHGEF33": {
                "id": 37252,
                "inheritance": "AD"
            },
            "RFX8": {
                "id": 37253,
                "inheritance": "AD"
            },
            "CTAGE14P": {
                "id": 37299,
                "inheritance": "AD"
            },
            "VN1R19P": {
                "id": 37328,
                "inheritance": "AD"
            },
            "VN1R18P": {
                "id": 37334,
                "inheritance": "AD"
            },
            "LINC00211": {
                "id": 37459,
                "inheritance": "AD"
            },
            "IGKV1OR2-118": {
                "id": 37488,
                "inheritance": "AD"
            },
            "IGKV2OR2-7D": {
                "id": 37489,
                "inheritance": "AD"
            },
            "SLC9B1P2": {
                "id": 37493,
                "inheritance": "AD"
            },
            "EIF3FP3": {
                "id": 37625,
                "inheritance": "AD"
            },
            "EIF2S2P4": {
                "id": 37626,
                "inheritance": "AD"
            },
            "BRD7P6": {
                "id": 37632,
                "inheritance": "AD"
            },
            "FTH1P20": {
                "id": 37639,
                "inheritance": "AD"
            },
            "YWHAQP5": {
                "id": 37684,
                "inheritance": "AD"
            },
            "GKN3P": {
                "id": 37701,
                "inheritance": "AD"
            },
            "MAPRE1P3": {
                "id": 37762,
                "inheritance": "AD"
            },
            "GAPDHP25": {
                "id": 37777,
                "inheritance": "AD"
            },
            "FN1": {
                "id": 3778,
                "inheritance": "AD"
            },
            "EIF2S2P7": {
                "id": 37795,
                "inheritance": "AD"
            },
            "GAPDHP48": {
                "id": 37805,
                "inheritance": "AD"
            },
            "NEK2P4": {
                "id": 37818,
                "inheritance": "AD"
            },
            "RHOQP2": {
                "id": 37836,
                "inheritance": "AD"
            },
            "RHOQP3": {
                "id": 37837,
                "inheritance": "AD"
            },
            "RSL24D1P2": {
                "id": 37867,
                "inheritance": "AD"
            },
            "KRT18P52": {
                "id": 37888,
                "inheritance": "AD"
            },
            "CICP10": {
                "id": 37901,
                "inheritance": "AD"
            },
            "EIF3EP2": {
                "id": 37919,
                "inheritance": "AD"
            },
            "EIF3EP3": {
                "id": 37920,
                "inheritance": "AD"
            },
            "ENO1P4": {
                "id": 37945,
                "inheritance": "AD"
            },
            "ENSAP3": {
                "id": 37946,
                "inheritance": "AD"
            },
            "FOSL2": {
                "id": 3798,
                "inheritance": "AD"
            },
            "PABPC1P6": {
                "id": 37986,
                "inheritance": "AD"
            },
            "GLULP6": {
                "id": 37990,
                "inheritance": "AD"
            },
            "GSTM3P2": {
                "id": 38006,
                "inheritance": "AD"
            },
            "ISCA1P6": {
                "id": 38027,
                "inheritance": "AD"
            },
            "UQCRHP2": {
                "id": 38045,
                "inheritance": "AD"
            },
            "LIN28AP1": {
                "id": 38055,
                "inheritance": "AD"
            },
            "CDC27P1": {
                "id": 38091,
                "inheritance": "AD"
            },
            "SUCLA2P2": {
                "id": 38102,
                "inheritance": "AD"
            },
            "SUCLA2P3": {
                "id": 38103,
                "inheritance": "AD"
            },
            "RP52": {
                "id": 38112,
                "inheritance": "AD"
            },
            "ELOCP21": {
                "id": 38157,
                "inheritance": "AD"
            },
            "TAF13P2": {
                "id": 38161,
                "inheritance": "AD"
            },
            "MIR4266": {
                "id": 38175,
                "inheritance": "AD"
            },
            "MIR3128": {
                "id": 38188,
                "inheritance": "AD"
            },
            "MIR3129": {
                "id": 38217,
                "inheritance": "AD"
            },
            "MIR3125": {
                "id": 38219,
                "inheritance": "AD"
            },
            "MIR3126": {
                "id": 38225,
                "inheritance": "AD"
            },
            "MIR3127": {
                "id": 38269,
                "inheritance": "AD"
            },
            "MIR4261": {
                "id": 38272,
                "inheritance": "AD"
            },
            "MIR3130-1": {
                "id": 38275,
                "inheritance": "AD"
            },
            "MIR4267": {
                "id": 38286,
                "inheritance": "AD"
            },
            "MIR4269": {
                "id": 38291,
                "inheritance": "AD"
            },
            "MIR3133": {
                "id": 38305,
                "inheritance": "AD"
            },
            "MIR4262": {
                "id": 38308,
                "inheritance": "AD"
            },
            "MIR2355": {
                "id": 38328,
                "inheritance": "AD"
            },
            "MIR4264": {
                "id": 38338,
                "inheritance": "AD"
            },
            "MIR3131": {
                "id": 38347,
                "inheritance": "AD"
            },
            "MIR4268": {
                "id": 38352,
                "inheritance": "AD"
            },
            "MIR548S": {
                "id": 38354,
                "inheritance": "AD"
            },
            "MIR4265": {
                "id": 38358,
                "inheritance": "AD"
            },
            "MIR3130-2": {
                "id": 38363,
                "inheritance": "AD"
            },
            "MIR4263": {
                "id": 38365,
                "inheritance": "AD"
            },
            "MIR3132": {
                "id": 38373,
                "inheritance": "AD"
            },
            "DBIL5P2": {
                "id": 38518,
                "inheritance": "AD"
            },
            "GAPDHP49": {
                "id": 38555,
                "inheritance": "AD"
            },
            "GAPDHP57": {
                "id": 38563,
                "inheritance": "AD"
            },
            "BTF3P5": {
                "id": 38565,
                "inheritance": "AD"
            },
            "ATG12P2": {
                "id": 38605,
                "inheritance": "AD"
            },
            "UBQLN4P2": {
                "id": 38662,
                "inheritance": "AD"
            },
            "LINC00276": {
                "id": 38663,
                "inheritance": "AD"
            },
            "ACTR3BP2": {
                "id": 38677,
                "inheritance": "AD"
            },
            "ST13P1": {
                "id": 38715,
                "inheritance": "AD"
            },
            "ST13P2": {
                "id": 38716,
                "inheritance": "AD"
            },
            "LY75-CD302": {
                "id": 38828,
                "inheritance": "AD"
            },
            "NT5C1B-RDH14": {
                "id": 38831,
                "inheritance": "AD"
            },
            "RNF103-CHMP3": {
                "id": 38847,
                "inheritance": "AD"
            },
            "FRA2A": {
                "id": 3885,
                "inheritance": "AD"
            },
            "FRA2B": {
                "id": 3886,
                "inheritance": "AD"
            },
            "TVP23BP2": {
                "id": 38869,
                "inheritance": "AD"
            },
            "FRA2C": {
                "id": 3887,
                "inheritance": "AD"
            },
            "FRA2D": {
                "id": 3888,
                "inheritance": "AD"
            },
            "MIR3606": {
                "id": 38881,
                "inheritance": "AD"
            },
            "FRA2E": {
                "id": 3889,
                "inheritance": "AD"
            },
            "FRA2F": {
                "id": 3890,
                "inheritance": "AD"
            },
            "FRA2G": {
                "id": 3891,
                "inheritance": "AD"
            },
            "MIR3682": {
                "id": 38916,
                "inheritance": "AD"
            },
            "FRA2H": {
                "id": 3892,
                "inheritance": "AD"
            },
            "FRA2I": {
                "id": 3893,
                "inheritance": "AD"
            },
            "FRA2J": {
                "id": 3894,
                "inheritance": "AD"
            },
            "FRA2K": {
                "id": 3895,
                "inheritance": "AD"
            },
            "MIR3679": {
                "id": 38979,
                "inheritance": "AD"
            },
            "MIR3681": {
                "id": 38994,
                "inheritance": "AD"
            },
            "ZFYVE9P2": {
                "id": 39046,
                "inheritance": "AD"
            },
            "API5P2": {
                "id": 39070,
                "inheritance": "AD"
            },
            "FTH1P6": {
                "id": 39088,
                "inheritance": "AD"
            },
            "HMGB1P25": {
                "id": 39116,
                "inheritance": "AD"
            },
            "HMGB1P27": {
                "id": 39118,
                "inheritance": "AD"
            },
            "HMGB1P31": {
                "id": 39122,
                "inheritance": "AD"
            },
            "TPM3P7": {
                "id": 39170,
                "inheritance": "AD"
            },
            "TPM3P8": {
                "id": 39171,
                "inheritance": "AD"
            },
            "HMGA1P8": {
                "id": 39183,
                "inheritance": "AD"
            },
            "HMGB3P11": {
                "id": 39303,
                "inheritance": "AD"
            },
            "SNRPGP7": {
                "id": 39326,
                "inheritance": "AD"
            },
            "SNRPGP8": {
                "id": 39327,
                "inheritance": "AD"
            },
            "SNRPGP9": {
                "id": 39328,
                "inheritance": "AD"
            },
            "DNAJA1P2": {
                "id": 39338,
                "inheritance": "AD"
            },
            "HMGN1P6": {
                "id": 39349,
                "inheritance": "AD"
            },
            "HMGN1P36": {
                "id": 39380,
                "inheritance": "AD"
            },
            "HMGN2P20": {
                "id": 39385,
                "inheritance": "AD"
            },
            "HMGN2P21": {
                "id": 39386,
                "inheritance": "AD"
            },
            "HMGN2P22": {
                "id": 39387,
                "inheritance": "AD"
            },
            "HMGN2P23": {
                "id": 39388,
                "inheritance": "AD"
            },
            "PRPS1P1": {
                "id": 39427,
                "inheritance": "AD"
            },
            "PRSS56": {
                "id": 39433,
                "inheritance": "AD"
            },
            "DYT21": {
                "id": 39436,
                "inheritance": "AD"
            },
            "MTND6P7": {
                "id": 39470,
                "inheritance": "AD"
            },
            "MTND6P8": {
                "id": 39471,
                "inheritance": "AD"
            },
            "MTND6P9": {
                "id": 39472,
                "inheritance": "AD"
            },
            "MTND6P10": {
                "id": 39473,
                "inheritance": "AD"
            },
            "MTND6P11": {
                "id": 39474,
                "inheritance": "AD"
            },
            "RPL7L1P9": {
                "id": 39491,
                "inheritance": "AD"
            },
            "RPL7L1P10": {
                "id": 39492,
                "inheritance": "AD"
            },
            "CNN2P8": {
                "id": 39533,
                "inheritance": "AD"
            },
            "CNN2P11": {
                "id": 39536,
                "inheritance": "AD"
            },
            "FRZB": {
                "id": 3959,
                "inheritance": "AD"
            },
            "SNX18P14": {
                "id": 39622,
                "inheritance": "AD"
            },
            "BTF3L4P2": {
                "id": 39646,
                "inheritance": "AD"
            },
            "FSHR": {
                "id": 3969,
                "inheritance": "AD"
            },
            "ELOBP3": {
                "id": 39721,
                "inheritance": "AD"
            },
            "SMARCE1P6": {
                "id": 39737,
                "inheritance": "AD"
            },
            "ATP5F1P4": {
                "id": 39745,
                "inheritance": "AD"
            },
            "PSMC1P10": {
                "id": 39785,
                "inheritance": "AD"
            },
            "CDKN2AIPNLP2": {
                "id": 39855,
                "inheritance": "AD"
            },
            "KRT8P40": {
                "id": 39874,
                "inheritance": "AD"
            },
            "FTH1P3": {
                "id": 3990,
                "inheritance": "AD"
            },
            "LIMS4": {
                "id": 39941,
                "inheritance": "AD"
            },
            "CYP4F27P": {
                "id": 39946,
                "inheritance": "AD"
            },
            "CYP4F32P": {
                "id": 39951,
                "inheritance": "AD"
            },
            "CYP4F31P": {
                "id": 39955,
                "inheritance": "AD"
            },
            "CYP4F62P": {
                "id": 39956,
                "inheritance": "AD"
            },
            "CYP2C56P": {
                "id": 39971,
                "inheritance": "AD"
            },
            "NBEAP2": {
                "id": 40003,
                "inheritance": "AD"
            },
            "GPR75-ASB3": {
                "id": 40043,
                "inheritance": "AD"
            },
            "FUCA1P1": {
                "id": 4007,
                "inheritance": "AD"
            },
            "CCNT2-AS1": {
                "id": 40130,
                "inheritance": "AD"
            },
            "DARS-AS1": {
                "id": 40170,
                "inheritance": "AD"
            },
            "GTF3C2-AS1": {
                "id": 40269,
                "inheritance": "AD"
            },
            "IDH1-AS1": {
                "id": 40292,
                "inheritance": "AD"
            },
            "LIMS1-AS1": {
                "id": 40342,
                "inheritance": "AD"
            },
            "MEIS1-AS3": {
                "id": 40369,
                "inheritance": "AD"
            },
            "MEIS1-AS2": {
                "id": 40370,
                "inheritance": "AD"
            },
            "FZD5": {
                "id": 4043,
                "inheritance": "AD"
            },
            "FZD7": {
                "id": 4045,
                "inheritance": "AD"
            },
            "SIX3-AS1": {
                "id": 40532,
                "inheritance": "AD"
            },
            "BIRC6-AS1": {
                "id": 40641,
                "inheritance": "AD"
            },
            "XIRP2-AS1": {
                "id": 40679,
                "inheritance": "AD"
            },
            "STARD7-AS1": {
                "id": 40827,
                "inheritance": "AD"
            },
            "GAD1": {
                "id": 4092,
                "inheritance": "AD"
            },
            "DPP10-AS3": {
                "id": 40939,
                "inheritance": "AD"
            },
            "DPP10-AS2": {
                "id": 40940,
                "inheritance": "AD"
            },
            "DPP10-AS1": {
                "id": 40941,
                "inheritance": "AD"
            },
            "FSIP2-AS1": {
                "id": 40978,
                "inheritance": "AD"
            },
            "OSGEPL1-AS1": {
                "id": 41009,
                "inheritance": "AD"
            },
            "TRAPPC12-AS1": {
                "id": 41046,
                "inheritance": "AD"
            },
            "STEAP3-AS1": {
                "id": 41053,
                "inheritance": "AD"
            },
            "CATIP-AS2": {
                "id": 41079,
                "inheritance": "AD"
            },
            "CATIP-AS1": {
                "id": 41080,
                "inheritance": "AD"
            },
            "ACOXL-AS1": {
                "id": 41112,
                "inheritance": "AD"
            },
            "TTC21B-AS1": {
                "id": 41115,
                "inheritance": "AD"
            },
            "AGBL5-AS1": {
                "id": 41133,
                "inheritance": "AD"
            },
            "IQCA1-AS1": {
                "id": 41137,
                "inheritance": "AD"
            },
            "RMDN2-AS1": {
                "id": 41150,
                "inheritance": "AD"
            },
            "GALNT3": {
                "id": 4125,
                "inheritance": "AD"
            },
            "GALNT5": {
                "id": 4127,
                "inheritance": "AD"
            },
            "ALMS1-IT1": {
                "id": 41305,
                "inheritance": "AD"
            },
            "KLF7-IT1": {
                "id": 41355,
                "inheritance": "AD"
            },
            "ST6GAL2-IT1": {
                "id": 41380,
                "inheritance": "AD"
            },
            "SOS1-IT1": {
                "id": 41385,
                "inheritance": "AD"
            },
            "TCF7L1-IT1": {
                "id": 41388,
                "inheritance": "AD"
            },
            "TGFA-IT1": {
                "id": 41389,
                "inheritance": "AD"
            },
            "EIPR1-IT1": {
                "id": 41392,
                "inheritance": "AD"
            },
            "AGAP1-IT1": {
                "id": 41427,
                "inheritance": "AD"
            },
            "UPP2-IT1": {
                "id": 41467,
                "inheritance": "AD"
            },
            "HS1BP3-IT1": {
                "id": 41474,
                "inheritance": "AD"
            },
            "ANKRD44-IT1": {
                "id": 41477,
                "inheritance": "AD"
            },
            "AGBL5-IT1": {
                "id": 41484,
                "inheritance": "AD"
            },
            "FBXO36-IT1": {
                "id": 41489,
                "inheritance": "AD"
            },
            "NCKAP5-IT1": {
                "id": 41497,
                "inheritance": "AD"
            },
            "VWC2L-IT1": {
                "id": 41508,
                "inheritance": "AD"
            },
            "GAPDHP59": {
                "id": 4152,
                "inheritance": "AD"
            },
            "MIR4780": {
                "id": 41552,
                "inheritance": "AD"
            },
            "MIR4438": {
                "id": 41555,
                "inheritance": "AD"
            },
            "MIR4429": {
                "id": 41579,
                "inheritance": "AD"
            },
            "MIR4784": {
                "id": 41580,
                "inheritance": "AD"
            },
            "MIR4436B1": {
                "id": 41587,
                "inheritance": "AD"
            },
            "MIR4439": {
                "id": 41622,
                "inheritance": "AD"
            },
            "MIR4776-2": {
                "id": 41631,
                "inheritance": "AD"
            },
            "MIR4433A": {
                "id": 41634,
                "inheritance": "AD"
            },
            "MIR4782": {
                "id": 41635,
                "inheritance": "AD"
            },
            "MIR4776-1": {
                "id": 41641,
                "inheritance": "AD"
            },
            "MIR4430": {
                "id": 41646,
                "inheritance": "AD"
            },
            "MIR4778": {
                "id": 41648,
                "inheritance": "AD"
            },
            "MIR4432": {
                "id": 41649,
                "inheritance": "AD"
            },
            "MIR548AD": {
                "id": 41683,
                "inheritance": "AD"
            },
            "MIR4773-1": {
                "id": 41699,
                "inheritance": "AD"
            },
            "MIR4444-1": {
                "id": 41710,
                "inheritance": "AD"
            },
            "MIR4435-1": {
                "id": 41713,
                "inheritance": "AD"
            },
            "MIR4437": {
                "id": 41715,
                "inheritance": "AD"
            },
            "MIR4441": {
                "id": 41728,
                "inheritance": "AD"
            },
            "MIR4431": {
                "id": 41738,
                "inheritance": "AD"
            },
            "MIR4440": {
                "id": 41740,
                "inheritance": "AD"
            },
            "MIR4772": {
                "id": 41741,
                "inheritance": "AD"
            },
            "MIR548AE1": {
                "id": 41742,
                "inheritance": "AD"
            },
            "MIR4757": {
                "id": 41746,
                "inheritance": "AD"
            },
            "MIR4779": {
                "id": 41747,
                "inheritance": "AD"
            },
            "MIR4786": {
                "id": 41751,
                "inheritance": "AD"
            },
            "MIR4436A": {
                "id": 41762,
                "inheritance": "AD"
            },
            "MIR4777": {
                "id": 41773,
                "inheritance": "AD"
            },
            "MIR4771-2": {
                "id": 41774,
                "inheritance": "AD"
            },
            "MIR4773-2": {
                "id": 41790,
                "inheritance": "AD"
            },
            "MIR4765": {
                "id": 41791,
                "inheritance": "AD"
            },
            "MIR1245B": {
                "id": 41794,
                "inheritance": "AD"
            },
            "MIR4434": {
                "id": 41832,
                "inheritance": "AD"
            },
            "MIR4435-2": {
                "id": 41837,
                "inheritance": "AD"
            },
            "GBX2": {
                "id": 4186,
                "inheritance": "AD"
            },
            "MIR4774": {
                "id": 41873,
                "inheritance": "AD"
            },
            "MIR4783": {
                "id": 41874,
                "inheritance": "AD"
            },
            "MIR2467": {
                "id": 41881,
                "inheritance": "AD"
            },
            "MIR4775": {
                "id": 41885,
                "inheritance": "AD"
            },
            "MIR4785": {
                "id": 41889,
                "inheritance": "AD"
            },
            "MIR4771-1": {
                "id": 41901,
                "inheritance": "AD"
            },
            "TYW1P1": {
                "id": 41905,
                "inheritance": "AD"
            },
            "GCG": {
                "id": 4191,
                "inheritance": "AD"
            },
            "PTP4A1P1": {
                "id": 41928,
                "inheritance": "AD"
            },
            "ATP6V0E1P3": {
                "id": 41937,
                "inheritance": "AD"
            },
            "TMSB10P1": {
                "id": 41949,
                "inheritance": "AD"
            },
            "FABP7P2": {
                "id": 41952,
                "inheritance": "AD"
            },
            "RNA5-8SP5": {
                "id": 41959,
                "inheritance": "AD"
            },
            "GCKR": {
                "id": 4196,
                "inheritance": "AD"
            },
            "ABCB11": {
                "id": 42,
                "inheritance": "AD"
            },
            "NONOP2": {
                "id": 42032,
                "inheritance": "AD"
            },
            "MTND1P26": {
                "id": 42075,
                "inheritance": "AD"
            },
            "MTND1P27": {
                "id": 42076,
                "inheritance": "AD"
            },
            "MTND1P28": {
                "id": 42077,
                "inheritance": "AD"
            },
            "MTND1P29": {
                "id": 42078,
                "inheritance": "AD"
            },
            "MTND2P18": {
                "id": 42119,
                "inheritance": "AD"
            },
            "MTND2P19": {
                "id": 42120,
                "inheritance": "AD"
            },
            "MTND2P20": {
                "id": 42121,
                "inheritance": "AD"
            },
            "MTND2P21": {
                "id": 42122,
                "inheritance": "AD"
            },
            "MTND2P22": {
                "id": 42123,
                "inheritance": "AD"
            },
            "MTND2P23": {
                "id": 42124,
                "inheritance": "AD"
            },
            "MTND3P9": {
                "id": 42149,
                "inheritance": "AD"
            },
            "MTND3P10": {
                "id": 42150,
                "inheritance": "AD"
            },
            "NANOGNBP1": {
                "id": 42158,
                "inheritance": "AD"
            },
            "SEPHS1P7": {
                "id": 42167,
                "inheritance": "AD"
            },
            "SEPHS1P6": {
                "id": 42168,
                "inheritance": "AD"
            },
            "ATP5G2P3": {
                "id": 42187,
                "inheritance": "AD"
            },
            "MTND4P21": {
                "id": 42208,
                "inheritance": "AD"
            },
            "MTND4P22": {
                "id": 42209,
                "inheritance": "AD"
            },
            "MTND4P23": {
                "id": 42210,
                "inheritance": "AD"
            },
            "MTND4P25": {
                "id": 42212,
                "inheritance": "AD"
            },
            "MTND4P26": {
                "id": 42213,
                "inheritance": "AD"
            },
            "MTND4P27": {
                "id": 42214,
                "inheritance": "AD"
            },
            "MTND4P28": {
                "id": 42215,
                "inheritance": "AD"
            },
            "MTND4P29": {
                "id": 42216,
                "inheritance": "AD"
            },
            "MTND4P30": {
                "id": 42217,
                "inheritance": "AD"
            },
            "GDF7": {
                "id": 4222,
                "inheritance": "AD"
            },
            "MSTN": {
                "id": 4223,
                "inheritance": "AD"
            },
            "MTND4LP12": {
                "id": 42246,
                "inheritance": "AD"
            },
            "MTND4LP13": {
                "id": 42247,
                "inheritance": "AD"
            },
            "MTND4LP14": {
                "id": 42248,
                "inheritance": "AD"
            },
            "MTND4LP15": {
                "id": 42249,
                "inheritance": "AD"
            },
            "MTND4LP16": {
                "id": 42250,
                "inheritance": "AD"
            },
            "MTND4LP17": {
                "id": 42251,
                "inheritance": "AD"
            },
            "MTND4LP28": {
                "id": 42262,
                "inheritance": "AD"
            },
            "MTND5P22": {
                "id": 42284,
                "inheritance": "AD"
            },
            "MTND5P23": {
                "id": 42285,
                "inheritance": "AD"
            },
            "MTND5P24": {
                "id": 42286,
                "inheritance": "AD"
            },
            "MTND5P25": {
                "id": 42287,
                "inheritance": "AD"
            },
            "MTND5P27": {
                "id": 42289,
                "inheritance": "AD"
            },
            "MTND5P28": {
                "id": 42290,
                "inheritance": "AD"
            },
            "MTND5P29": {
                "id": 42291,
                "inheritance": "AD"
            },
            "MTND5P30": {
                "id": 42292,
                "inheritance": "AD"
            },
            "MTND5P31": {
                "id": 42293,
                "inheritance": "AD"
            },
            "TEKT4P3": {
                "id": 42330,
                "inheritance": "AD"
            },
            "HNRNPKP2": {
                "id": 42375,
                "inheritance": "AD"
            },
            "GFPT1": {
                "id": 4241,
                "inheritance": "AD"
            },
            "YBX1P7": {
                "id": 42428,
                "inheritance": "AD"
            },
            "PGAM1P6": {
                "id": 42453,
                "inheritance": "AD"
            },
            "GGCX": {
                "id": 4247,
                "inheritance": "AD"
            },
            "LINC00342": {
                "id": 42470,
                "inheritance": "AD"
            },
            "RNU5E-7P": {
                "id": 42526,
                "inheritance": "AD"
            },
            "RNU5E-9P": {
                "id": 42532,
                "inheritance": "AD"
            },
            "MEAF6P1": {
                "id": 42660,
                "inheritance": "AD"
            },
            "PKP4P1": {
                "id": 42661,
                "inheritance": "AD"
            },
            "ABCD1P5": {
                "id": 42662,
                "inheritance": "AD"
            },
            "ALK": {
                "id": 427,
                "inheritance": "AD"
            },
            "ALMS1": {
                "id": 428,
                "inheritance": "AD"
            },
            "GMCL1P2": {
                "id": 42863,
                "inheritance": "AD"
            },
            "CBX3P6": {
                "id": 42878,
                "inheritance": "AD"
            },
            "RNA5SP84": {
                "id": 42882,
                "inheritance": "AD"
            },
            "RNA5SP85": {
                "id": 42883,
                "inheritance": "AD"
            },
            "RNA5SP86": {
                "id": 42884,
                "inheritance": "AD"
            },
            "RNA5SP87": {
                "id": 42885,
                "inheritance": "AD"
            },
            "RNA5SP88": {
                "id": 42886,
                "inheritance": "AD"
            },
            "RNA5SP89": {
                "id": 42887,
                "inheritance": "AD"
            },
            "RNA5SP90": {
                "id": 42888,
                "inheritance": "AD"
            },
            "RNA5SP91": {
                "id": 42889,
                "inheritance": "AD"
            },
            "RNA5SP92": {
                "id": 42890,
                "inheritance": "AD"
            },
            "RNA5SP93": {
                "id": 42891,
                "inheritance": "AD"
            },
            "RNA5SP94": {
                "id": 42892,
                "inheritance": "AD"
            },
            "RNA5SP95": {
                "id": 42893,
                "inheritance": "AD"
            },
            "RNA5SP96": {
                "id": 42894,
                "inheritance": "AD"
            },
            "RNA5SP97": {
                "id": 42895,
                "inheritance": "AD"
            },
            "RNA5SP98": {
                "id": 42896,
                "inheritance": "AD"
            },
            "RNA5SP99": {
                "id": 42897,
                "inheritance": "AD"
            },
            "RNA5SP100": {
                "id": 42898,
                "inheritance": "AD"
            },
            "RNA5SP101": {
                "id": 42899,
                "inheritance": "AD"
            },
            "RNA5SP102": {
                "id": 42900,
                "inheritance": "AD"
            },
            "RNA5SP103": {
                "id": 42901,
                "inheritance": "AD"
            },
            "RNA5SP104": {
                "id": 42902,
                "inheritance": "AD"
            },
            "RNA5SP105": {
                "id": 42903,
                "inheritance": "AD"
            },
            "RNA5SP106": {
                "id": 42904,
                "inheritance": "AD"
            },
            "RNA5SP107": {
                "id": 42905,
                "inheritance": "AD"
            },
            "RNA5SP108": {
                "id": 42906,
                "inheritance": "AD"
            },
            "RNA5SP109": {
                "id": 42907,
                "inheritance": "AD"
            },
            "RNA5SP110": {
                "id": 42908,
                "inheritance": "AD"
            },
            "RNA5SP111": {
                "id": 42909,
                "inheritance": "AD"
            },
            "RNA5SP112": {
                "id": 42910,
                "inheritance": "AD"
            },
            "RNA5SP113": {
                "id": 42911,
                "inheritance": "AD"
            },
            "RNA5SP114": {
                "id": 42912,
                "inheritance": "AD"
            },
            "RNA5SP115": {
                "id": 42913,
                "inheritance": "AD"
            },
            "RNA5SP116": {
                "id": 42914,
                "inheritance": "AD"
            },
            "RNA5SP117": {
                "id": 42915,
                "inheritance": "AD"
            },
            "RNA5SP118": {
                "id": 42916,
                "inheritance": "AD"
            },
            "RNA5SP119": {
                "id": 42917,
                "inheritance": "AD"
            },
            "RNA5SP120": {
                "id": 42918,
                "inheritance": "AD"
            },
            "RNA5SP121": {
                "id": 42919,
                "inheritance": "AD"
            },
            "RNA5SP122": {
                "id": 42920,
                "inheritance": "AD"
            },
            "BOLA3-AS1": {
                "id": 42922,
                "inheritance": "AD"
            },
            "DNAJC27-AS1": {
                "id": 42943,
                "inheritance": "AD"
            },
            "LINC00486": {
                "id": 42946,
                "inheritance": "AD"
            },
            "LINC00487": {
                "id": 42947,
                "inheritance": "AD"
            },
            "PCBP1-AS1": {
                "id": 42948,
                "inheritance": "AD"
            },
            "C2orf91": {
                "id": 42966,
                "inheritance": "AD"
            },
            "TMEM247": {
                "id": 42967,
                "inheritance": "AD"
            },
            "H3F3AP4": {
                "id": 42980,
                "inheritance": "AD"
            },
            "HIGD1AP4": {
                "id": 43000,
                "inheritance": "AD"
            },
            "GLC1B": {
                "id": 4302,
                "inheritance": "AD"
            },
            "GLI2": {
                "id": 4318,
                "inheritance": "AD"
            },
            "GLS": {
                "id": 4331,
                "inheritance": "AD"
            },
            "DGUOK-AS1": {
                "id": 43441,
                "inheritance": "AD"
            },
            "SNRPEP5": {
                "id": 43447,
                "inheritance": "AD"
            },
            "MIR4436B2": {
                "id": 43451,
                "inheritance": "AD"
            },
            "MIR5001": {
                "id": 43462,
                "inheritance": "AD"
            },
            "MIR5000": {
                "id": 43464,
                "inheritance": "AD"
            },
            "MIR5192": {
                "id": 43473,
                "inheritance": "AD"
            },
            "MIR5703": {
                "id": 43475,
                "inheritance": "AD"
            },
            "MIR5702": {
                "id": 43503,
                "inheritance": "AD"
            },
            "MIR5696": {
                "id": 43516,
                "inheritance": "AD"
            },
            "MIR5590": {
                "id": 43541,
                "inheritance": "AD"
            },
            "CHEK2P3": {
                "id": 43579,
                "inheritance": "AD"
            },
            "ALPI": {
                "id": 437,
                "inheritance": "AD"
            },
            "LINC00570": {
                "id": 43717,
                "inheritance": "AD"
            },
            "HAGLR": {
                "id": 43755,
                "inheritance": "AD"
            },
            "HOXD-AS2": {
                "id": 43756,
                "inheritance": "AD"
            },
            "FTOP1": {
                "id": 43759,
                "inheritance": "AD"
            },
            "COX20P2": {
                "id": 43772,
                "inheritance": "AD"
            },
            "PTGES3P2": {
                "id": 43822,
                "inheritance": "AD"
            },
            "PSMA2P3": {
                "id": 43834,
                "inheritance": "AD"
            },
            "DAZAP2P1": {
                "id": 43869,
                "inheritance": "AD"
            },
            "BANF1P3": {
                "id": 43883,
                "inheritance": "AD"
            },
            "ALPP": {
                "id": 439,
                "inheritance": "AD"
            },
            "GNAQP1": {
                "id": 4391,
                "inheritance": "AD"
            },
            "NECAP1P2": {
                "id": 43913,
                "inheritance": "AD"
            },
            "GCSHP3": {
                "id": 43929,
                "inheritance": "AD"
            },
            "ARHGAP42P2": {
                "id": 43939,
                "inheritance": "AD"
            },
            "ARHGAP42P1": {
                "id": 43940,
                "inheritance": "AD"
            },
            "LINC00607": {
                "id": 43944,
                "inheritance": "AD"
            },
            "POLHP1": {
                "id": 43967,
                "inheritance": "AD"
            },
            "TRIM64FP": {
                "id": 43976,
                "inheritance": "AD"
            },
            "TRIM51JP": {
                "id": 43978,
                "inheritance": "AD"
            },
            "TRIM43CP": {
                "id": 43981,
                "inheritance": "AD"
            },
            "PSAT1P2": {
                "id": 43988,
                "inheritance": "AD"
            },
            "TRMT112P6": {
                "id": 44025,
                "inheritance": "AD"
            },
            "PGBD4P5": {
                "id": 44070,
                "inheritance": "AD"
            },
            "PCED1CP": {
                "id": 44083,
                "inheritance": "AD"
            },
            "ALPPL2": {
                "id": 441,
                "inheritance": "AD"
            },
            "SLC8A1-AS1": {
                "id": 44102,
                "inheritance": "AD"
            },
            "TTN-AS1": {
                "id": 44124,
                "inheritance": "AD"
            },
            "MED15P9": {
                "id": 44130,
                "inheritance": "AD"
            },
            "CCDC148-AS1": {
                "id": 44134,
                "inheritance": "AD"
            },
            "FAHD2CP": {
                "id": 44135,
                "inheritance": "AD"
            },
            "GNLY": {
                "id": 4414,
                "inheritance": "AD"
            },
            "ANAPC1P1": {
                "id": 44150,
                "inheritance": "AD"
            },
            "DCTN1-AS1": {
                "id": 44151,
                "inheritance": "AD"
            },
            "SH3RF3-AS1": {
                "id": 44168,
                "inheritance": "AD"
            },
            "BRE-AS1": {
                "id": 44171,
                "inheritance": "AD"
            },
            "FAM133DP": {
                "id": 44192,
                "inheritance": "AD"
            },
            "ALS2": {
                "id": 443,
                "inheritance": "AD"
            },
            "PEBP1P2": {
                "id": 44344,
                "inheritance": "AD"
            },
            "LSM3P3": {
                "id": 44348,
                "inheritance": "AD"
            },
            "RNFT1P1": {
                "id": 44387,
                "inheritance": "AD"
            },
            "ERICH2": {
                "id": 44395,
                "inheritance": "AD"
            },
            "GPAA1P1": {
                "id": 4447,
                "inheritance": "AD"
            },
            "CERS6-AS1": {
                "id": 44485,
                "inheritance": "AD"
            },
            "GPC1": {
                "id": 4449,
                "inheritance": "AD"
            },
            "RPEP5": {
                "id": 44524,
                "inheritance": "AD"
            },
            "FNBP1P1": {
                "id": 44528,
                "inheritance": "AD"
            },
            "DSTNP5": {
                "id": 44549,
                "inheritance": "AD"
            },
            "GPD2": {
                "id": 4456,
                "inheritance": "AD"
            },
            "MTATP8P2": {
                "id": 44572,
                "inheritance": "AD"
            },
            "MTATP6P4": {
                "id": 44578,
                "inheritance": "AD"
            },
            "MTATP6P5": {
                "id": 44579,
                "inheritance": "AD"
            },
            "MTATP6P7": {
                "id": 44581,
                "inheritance": "AD"
            },
            "GPR1": {
                "id": 4463,
                "inheritance": "AD"
            },
            "GPR17": {
                "id": 4471,
                "inheritance": "AD"
            },
            "UBE2V1P6": {
                "id": 44889,
                "inheritance": "AD"
            },
            "UBE2V1P11": {
                "id": 44896,
                "inheritance": "AD"
            },
            "GPR35": {
                "id": 4492,
                "inheritance": "AD"
            },
            "HSPA8P6": {
                "id": 44921,
                "inheritance": "AD"
            },
            "HSPA8P10": {
                "id": 44925,
                "inheritance": "AD"
            },
            "PTCHD3P2": {
                "id": 44946,
                "inheritance": "AD"
            },
            "NIFKP9": {
                "id": 44957,
                "inheritance": "AD"
            },
            "GPR39": {
                "id": 4496,
                "inheritance": "AD"
            },
            "AHCYP3": {
                "id": 44995,
                "inheritance": "AD"
            },
            "AHCYP4": {
                "id": 44996,
                "inheritance": "AD"
            },
            "AHCYP5": {
                "id": 44997,
                "inheritance": "AD"
            },
            "GPR45": {
                "id": 4503,
                "inheritance": "AD"
            },
            "TDRD15": {
                "id": 45037,
                "inheritance": "AD"
            },
            "DBF4P2": {
                "id": 45060,
                "inheritance": "AD"
            },
            "DBF4P3": {
                "id": 45061,
                "inheritance": "AD"
            },
            "DNAJC19P5": {
                "id": 45068,
                "inheritance": "AD"
            },
            "MED28P3": {
                "id": 45080,
                "inheritance": "AD"
            },
            "TMEM256P2": {
                "id": 45088,
                "inheritance": "AD"
            },
            "YY1P2": {
                "id": 45095,
                "inheritance": "AD"
            },
            "GPR55": {
                "id": 4511,
                "inheritance": "AD"
            },
            "CACYBPP2": {
                "id": 45123,
                "inheritance": "AD"
            },
            "PIGPP1": {
                "id": 45153,
                "inheritance": "AD"
            },
            "ST6GALNAC2P1": {
                "id": 45160,
                "inheritance": "AD"
            },
            "SDHCP3": {
                "id": 45178,
                "inheritance": "AD"
            },
            "NMUR1": {
                "id": 4518,
                "inheritance": "AD"
            },
            "CTBP2P5": {
                "id": 45197,
                "inheritance": "AD"
            },
            "NPM1P32": {
                "id": 45211,
                "inheritance": "AD"
            },
            "NPM1P33": {
                "id": 45212,
                "inheritance": "AD"
            },
            "NPM1P46": {
                "id": 45225,
                "inheritance": "AD"
            },
            "NPM1P48": {
                "id": 45227,
                "inheritance": "AD"
            },
            "PROKR1": {
                "id": 4524,
                "inheritance": "AD"
            },
            "NDUFB4P4": {
                "id": 45252,
                "inheritance": "AD"
            },
            "NDUFB4P5": {
                "id": 45253,
                "inheritance": "AD"
            },
            "NDUFB4P6": {
                "id": 45254,
                "inheritance": "AD"
            },
            "NDUFB4P7": {
                "id": 45255,
                "inheritance": "AD"
            },
            "GPR75": {
                "id": 4526,
                "inheritance": "AD"
            },
            "RNU7-96P": {
                "id": 45630,
                "inheritance": "AD"
            },
            "RNU7-104P": {
                "id": 45638,
                "inheritance": "AD"
            },
            "RNU7-113P": {
                "id": 45647,
                "inheritance": "AD"
            },
            "GRB14": {
                "id": 4565,
                "inheritance": "AD"
            },
            "RNU7-127P": {
                "id": 45661,
                "inheritance": "AD"
            },
            "RNU7-138P": {
                "id": 45672,
                "inheritance": "AD"
            },
            "RNU7-147P": {
                "id": 45681,
                "inheritance": "AD"
            },
            "RNU7-148P": {
                "id": 45682,
                "inheritance": "AD"
            },
            "RNU7-172P": {
                "id": 45706,
                "inheritance": "AD"
            },
            "RNU7-176P": {
                "id": 45710,
                "inheritance": "AD"
            },
            "RNU7-182P": {
                "id": 45716,
                "inheritance": "AD"
            },
            "RNU7-190P": {
                "id": 45724,
                "inheritance": "AD"
            },
            "RN7SKP27": {
                "id": 45751,
                "inheritance": "AD"
            },
            "RN7SKP38": {
                "id": 45762,
                "inheritance": "AD"
            },
            "RN7SKP42": {
                "id": 45766,
                "inheritance": "AD"
            },
            "RN7SKP43": {
                "id": 45767,
                "inheritance": "AD"
            },
            "RN7SKP66": {
                "id": 45790,
                "inheritance": "AD"
            },
            "RN7SKP83": {
                "id": 45807,
                "inheritance": "AD"
            },
            "RN7SKP93": {
                "id": 45817,
                "inheritance": "AD"
            },
            "RN7SKP102": {
                "id": 45826,
                "inheritance": "AD"
            },
            "RN7SKP103": {
                "id": 45827,
                "inheritance": "AD"
            },
            "RN7SKP112": {
                "id": 45836,
                "inheritance": "AD"
            },
            "RN7SKP119": {
                "id": 45843,
                "inheritance": "AD"
            },
            "RN7SKP141": {
                "id": 45865,
                "inheritance": "AD"
            },
            "RN7SKP152": {
                "id": 45876,
                "inheritance": "AD"
            },
            "RN7SKP154": {
                "id": 45878,
                "inheritance": "AD"
            },
            "RN7SKP164": {
                "id": 45888,
                "inheritance": "AD"
            },
            "RN7SKP168": {
                "id": 45892,
                "inheritance": "AD"
            },
            "RN7SKP178": {
                "id": 45902,
                "inheritance": "AD"
            },
            "RN7SKP179": {
                "id": 45903,
                "inheritance": "AD"
            },
            "RN7SKP200": {
                "id": 45924,
                "inheritance": "AD"
            },
            "RN7SKP203": {
                "id": 45927,
                "inheritance": "AD"
            },
            "RN7SKP208": {
                "id": 45932,
                "inheritance": "AD"
            },
            "RN7SKP213": {
                "id": 45937,
                "inheritance": "AD"
            },
            "RN7SKP224": {
                "id": 45948,
                "inheritance": "AD"
            },
            "RN7SKP260": {
                "id": 45984,
                "inheritance": "AD"
            },
            "RN7SKP281": {
                "id": 46005,
                "inheritance": "AD"
            },
            "RN7SKP283": {
                "id": 46007,
                "inheritance": "AD"
            },
            "RN7SKP286": {
                "id": 46010,
                "inheritance": "AD"
            },
            "RN7SL18P": {
                "id": 46034,
                "inheritance": "AD"
            },
            "RN7SL32P": {
                "id": 46048,
                "inheritance": "AD"
            },
            "RN7SL40P": {
                "id": 46056,
                "inheritance": "AD"
            },
            "RN7SL51P": {
                "id": 46067,
                "inheritance": "AD"
            },
            "RN7SL65P": {
                "id": 46081,
                "inheritance": "AD"
            },
            "RN7SL66P": {
                "id": 46082,
                "inheritance": "AD"
            },
            "RN7SL96P": {
                "id": 46112,
                "inheritance": "AD"
            },
            "RN7SL104P": {
                "id": 46120,
                "inheritance": "AD"
            },
            "RN7SL111P": {
                "id": 46127,
                "inheritance": "AD"
            },
            "RN7SL113P": {
                "id": 46129,
                "inheritance": "AD"
            },
            "RN7SL117P": {
                "id": 46133,
                "inheritance": "AD"
            },
            "RN7SL124P": {
                "id": 46140,
                "inheritance": "AD"
            },
            "RN7SL126P": {
                "id": 46142,
                "inheritance": "AD"
            },
            "RN7SL140P": {
                "id": 46156,
                "inheritance": "AD"
            },
            "RN7SL160P": {
                "id": 46176,
                "inheritance": "AD"
            },
            "RN7SL201P": {
                "id": 46217,
                "inheritance": "AD"
            },
            "RN7SL204P": {
                "id": 46220,
                "inheritance": "AD"
            },
            "RN7SL210P": {
                "id": 46226,
                "inheritance": "AD"
            },
            "RN7SL211P": {
                "id": 46227,
                "inheritance": "AD"
            },
            "RN7SL251P": {
                "id": 46267,
                "inheritance": "AD"
            },
            "RN7SL267P": {
                "id": 46283,
                "inheritance": "AD"
            },
            "RN7SL283P": {
                "id": 46299,
                "inheritance": "AD"
            },
            "RN7SL297P": {
                "id": 46313,
                "inheritance": "AD"
            },
            "RN7SL313P": {
                "id": 46329,
                "inheritance": "AD"
            },
            "RN7SL341P": {
                "id": 46357,
                "inheritance": "AD"
            },
            "RN7SL359P": {
                "id": 46375,
                "inheritance": "AD"
            },
            "RN7SL361P": {
                "id": 46377,
                "inheritance": "AD"
            },
            "RN7SL393P": {
                "id": 46409,
                "inheritance": "AD"
            },
            "RN7SL414P": {
                "id": 46430,
                "inheritance": "AD"
            },
            "RN7SL423P": {
                "id": 46439,
                "inheritance": "AD"
            },
            "RN7SL455P": {
                "id": 46471,
                "inheritance": "AD"
            },
            "RN7SL468P": {
                "id": 46484,
                "inheritance": "AD"
            },
            "RN7SL470P": {
                "id": 46486,
                "inheritance": "AD"
            },
            "RN7SL499P": {
                "id": 46515,
                "inheritance": "AD"
            },
            "RN7SL516P": {
                "id": 46532,
                "inheritance": "AD"
            },
            "RN7SL531P": {
                "id": 46547,
                "inheritance": "AD"
            },
            "RN7SL575P": {
                "id": 46591,
                "inheritance": "AD"
            },
            "RN7SL602P": {
                "id": 46618,
                "inheritance": "AD"
            },
            "RN7SL604P": {
                "id": 46620,
                "inheritance": "AD"
            },
            "RN7SL610P": {
                "id": 46626,
                "inheritance": "AD"
            },
            "RN7SL632P": {
                "id": 46648,
                "inheritance": "AD"
            },
            "GTF3C2": {
                "id": 4665,
                "inheritance": "AD"
            },
            "RN7SL635P": {
                "id": 46651,
                "inheritance": "AD"
            },
            "GTF3C3": {
                "id": 4666,
                "inheritance": "AD"
            },
            "RN7SL670P": {
                "id": 46686,
                "inheritance": "AD"
            },
            "RN7SL674P": {
                "id": 46690,
                "inheritance": "AD"
            },
            "RN7SL717P": {
                "id": 46733,
                "inheritance": "AD"
            },
            "RN7SL753P": {
                "id": 46769,
                "inheritance": "AD"
            },
            "RN7SL764P": {
                "id": 46780,
                "inheritance": "AD"
            },
            "RN7SL807P": {
                "id": 46823,
                "inheritance": "AD"
            },
            "RN7SL813P": {
                "id": 46829,
                "inheritance": "AD"
            },
            "RN7SL817P": {
                "id": 46833,
                "inheritance": "AD"
            },
            "RN7SL820P": {
                "id": 46836,
                "inheritance": "AD"
            },
            "RN7SL832P": {
                "id": 46848,
                "inheritance": "AD"
            },
            "RN7SL834P": {
                "id": 46850,
                "inheritance": "AD"
            },
            "RN7SL856P": {
                "id": 46872,
                "inheritance": "AD"
            },
            "VTRNA2-2P": {
                "id": 46889,
                "inheritance": "AD"
            },
            "RNU6ATAC14P": {
                "id": 46913,
                "inheritance": "AD"
            },
            "RNU6ATAC19P": {
                "id": 46918,
                "inheritance": "AD"
            },
            "RNU6ATAC37P": {
                "id": 46936,
                "inheritance": "AD"
            },
            "RNU4-48P": {
                "id": 46984,
                "inheritance": "AD"
            },
            "RNU4-49P": {
                "id": 46985,
                "inheritance": "AD"
            },
            "RNU4-51P": {
                "id": 46987,
                "inheritance": "AD"
            },
            "RNU4-63P": {
                "id": 46999,
                "inheritance": "AD"
            },
            "ABCB6": {
                "id": 47,
                "inheritance": "AD"
            },
            "RNU4-73P": {
                "id": 47009,
                "inheritance": "AD"
            },
            "RNU4-84P": {
                "id": 47020,
                "inheritance": "AD"
            },
            "GYPC": {
                "id": 4704,
                "inheritance": "AD"
            },
            "RNU6-100P": {
                "id": 47063,
                "inheritance": "AD"
            },
            "RNU6-105P": {
                "id": 47068,
                "inheritance": "AD"
            },
            "RNU6-107P": {
                "id": 47070,
                "inheritance": "AD"
            },
            "RNU6-111P": {
                "id": 47074,
                "inheritance": "AD"
            },
            "RNU6-127P": {
                "id": 47090,
                "inheritance": "AD"
            },
            "RNU6-136P": {
                "id": 47099,
                "inheritance": "AD"
            },
            "RNU6-137P": {
                "id": 47100,
                "inheritance": "AD"
            },
            "RNU6-169P": {
                "id": 47132,
                "inheritance": "AD"
            },
            "RNU6-175P": {
                "id": 47138,
                "inheritance": "AD"
            },
            "RNU6-182P": {
                "id": 47145,
                "inheritance": "AD"
            },
            "RNU6-187P": {
                "id": 47150,
                "inheritance": "AD"
            },
            "RNU6-198P": {
                "id": 47161,
                "inheritance": "AD"
            },
            "RNU6-221P": {
                "id": 47184,
                "inheritance": "AD"
            },
            "RNU6-234P": {
                "id": 47197,
                "inheritance": "AD"
            },
            "RNU6-242P": {
                "id": 47205,
                "inheritance": "AD"
            },
            "RNU6-259P": {
                "id": 47222,
                "inheritance": "AD"
            },
            "RNU6-268P": {
                "id": 47231,
                "inheritance": "AD"
            },
            "RNU6-282P": {
                "id": 47245,
                "inheritance": "AD"
            },
            "RNU6-312P": {
                "id": 47275,
                "inheritance": "AD"
            },
            "RNU6-360P": {
                "id": 47323,
                "inheritance": "AD"
            },
            "RNU6-370P": {
                "id": 47333,
                "inheritance": "AD"
            },
            "RNU6-395P": {
                "id": 47358,
                "inheritance": "AD"
            },
            "RNU6-433P": {
                "id": 47396,
                "inheritance": "AD"
            },
            "RNU6-436P": {
                "id": 47399,
                "inheritance": "AD"
            },
            "RNU6-439P": {
                "id": 47402,
                "inheritance": "AD"
            },
            "RNU6-440P": {
                "id": 47403,
                "inheritance": "AD"
            },
            "RNU6-451P": {
                "id": 47414,
                "inheritance": "AD"
            },
            "RNU6-473P": {
                "id": 47436,
                "inheritance": "AD"
            },
            "RNU6-474P": {
                "id": 47437,
                "inheritance": "AD"
            },
            "RNU6-508P": {
                "id": 47471,
                "inheritance": "AD"
            },
            "RNU6-512P": {
                "id": 47475,
                "inheritance": "AD"
            },
            "RNU6-542P": {
                "id": 47505,
                "inheritance": "AD"
            },
            "RNU6-546P": {
                "id": 47509,
                "inheritance": "AD"
            },
            "RNU6-548P": {
                "id": 47511,
                "inheritance": "AD"
            },
            "RNU6-561P": {
                "id": 47524,
                "inheritance": "AD"
            },
            "RNU6-566P": {
                "id": 47529,
                "inheritance": "AD"
            },
            "RNU6-577P": {
                "id": 47540,
                "inheritance": "AD"
            },
            "RNU6-579P": {
                "id": 47542,
                "inheritance": "AD"
            },
            "RNU6-580P": {
                "id": 47543,
                "inheritance": "AD"
            },
            "RNU6-601P": {
                "id": 47564,
                "inheritance": "AD"
            },
            "RNU6-612P": {
                "id": 47575,
                "inheritance": "AD"
            },
            "RNU6-613P": {
                "id": 47576,
                "inheritance": "AD"
            },
            "RNU6-617P": {
                "id": 47580,
                "inheritance": "AD"
            },
            "RNU6-619P": {
                "id": 47582,
                "inheritance": "AD"
            },
            "RNU6-624P": {
                "id": 47587,
                "inheritance": "AD"
            },
            "RNU6-627P": {
                "id": 47590,
                "inheritance": "AD"
            },
            "RNU6-629P": {
                "id": 47592,
                "inheritance": "AD"
            },
            "RNU6-634P": {
                "id": 47597,
                "inheritance": "AD"
            },
            "RNU6-640P": {
                "id": 47603,
                "inheritance": "AD"
            },
            "RNU6-642P": {
                "id": 47605,
                "inheritance": "AD"
            },
            "RNU6-647P": {
                "id": 47610,
                "inheritance": "AD"
            },
            "RNU6-649P": {
                "id": 47612,
                "inheritance": "AD"
            },
            "RNU6-651P": {
                "id": 47614,
                "inheritance": "AD"
            },
            "RNU6-664P": {
                "id": 47627,
                "inheritance": "AD"
            },
            "RNU6-674P": {
                "id": 47637,
                "inheritance": "AD"
            },
            "RNU6-675P": {
                "id": 47638,
                "inheritance": "AD"
            },
            "RNU6-685P": {
                "id": 47648,
                "inheritance": "AD"
            },
            "RNU6-692P": {
                "id": 47655,
                "inheritance": "AD"
            },
            "RNU6-715P": {
                "id": 47678,
                "inheritance": "AD"
            },
            "RNU6-744P": {
                "id": 47707,
                "inheritance": "AD"
            },
            "RNU6-762P": {
                "id": 47725,
                "inheritance": "AD"
            },
            "RNU6-763P": {
                "id": 47726,
                "inheritance": "AD"
            },
            "RNU6-766P": {
                "id": 47729,
                "inheritance": "AD"
            },
            "RNU6-775P": {
                "id": 47738,
                "inheritance": "AD"
            },
            "RNU6-812P": {
                "id": 47775,
                "inheritance": "AD"
            },
            "RNU6-827P": {
                "id": 47790,
                "inheritance": "AD"
            },
            "RNU6-843P": {
                "id": 47806,
                "inheritance": "AD"
            },
            "RNU6-848P": {
                "id": 47811,
                "inheritance": "AD"
            },
            "RNU6-851P": {
                "id": 47814,
                "inheritance": "AD"
            },
            "RNU6-904P": {
                "id": 47867,
                "inheritance": "AD"
            },
            "RNU6-915P": {
                "id": 47878,
                "inheritance": "AD"
            },
            "RNU6-932P": {
                "id": 47895,
                "inheritance": "AD"
            },
            "RNU6-936P": {
                "id": 47899,
                "inheritance": "AD"
            },
            "RNU6-939P": {
                "id": 47902,
                "inheritance": "AD"
            },
            "RNU6-942P": {
                "id": 47905,
                "inheritance": "AD"
            },
            "RNU6-951P": {
                "id": 47914,
                "inheritance": "AD"
            },
            "RNU6-958P": {
                "id": 47921,
                "inheritance": "AD"
            },
            "RNU6-959P": {
                "id": 47922,
                "inheritance": "AD"
            },
            "RNU6-961P": {
                "id": 47924,
                "inheritance": "AD"
            },
            "RNU6-964P": {
                "id": 47927,
                "inheritance": "AD"
            },
            "RNU6-986P": {
                "id": 47949,
                "inheritance": "AD"
            },
            "RNU6-989P": {
                "id": 47952,
                "inheritance": "AD"
            },
            "HAAO": {
                "id": 4796,
                "inheritance": "AD"
            },
            "RNU6-997P": {
                "id": 47960,
                "inheritance": "AD"
            },
            "RNU6-1001P": {
                "id": 47964,
                "inheritance": "AD"
            },
            "RNU6-1006P": {
                "id": 47969,
                "inheritance": "AD"
            },
            "RNU6-1007P": {
                "id": 47970,
                "inheritance": "AD"
            },
            "RNU6-1027P": {
                "id": 47990,
                "inheritance": "AD"
            },
            "RNU6-1029P": {
                "id": 47992,
                "inheritance": "AD"
            },
            "RNU6-1045P": {
                "id": 48008,
                "inheritance": "AD"
            },
            "HADHA": {
                "id": 4801,
                "inheritance": "AD"
            },
            "RNU6-1048P": {
                "id": 48011,
                "inheritance": "AD"
            },
            "RNU6-1049P": {
                "id": 48012,
                "inheritance": "AD"
            },
            "RNU6-1051P": {
                "id": 48014,
                "inheritance": "AD"
            },
            "HADHB": {
                "id": 4803,
                "inheritance": "AD"
            },
            "RNU6-1081P": {
                "id": 48044,
                "inheritance": "AD"
            },
            "RNU6-1116P": {
                "id": 48079,
                "inheritance": "AD"
            },
            "RNU6-1117P": {
                "id": 48080,
                "inheritance": "AD"
            },
            "RNU6-1122P": {
                "id": 48085,
                "inheritance": "AD"
            },
            "RNU6-1132P": {
                "id": 48095,
                "inheritance": "AD"
            },
            "RNU6-1140P": {
                "id": 48103,
                "inheritance": "AD"
            },
            "RNU6-1145P": {
                "id": 48108,
                "inheritance": "AD"
            },
            "RNU6-1147P": {
                "id": 48110,
                "inheritance": "AD"
            },
            "RNU6-1168P": {
                "id": 48131,
                "inheritance": "AD"
            },
            "RNU6-1180P": {
                "id": 48143,
                "inheritance": "AD"
            },
            "RNU6-1206P": {
                "id": 48169,
                "inheritance": "AD"
            },
            "RNU6-1215P": {
                "id": 48178,
                "inheritance": "AD"
            },
            "RNU6-1216P": {
                "id": 48179,
                "inheritance": "AD"
            },
            "HAT1": {
                "id": 4821,
                "inheritance": "AD"
            },
            "RNU6-1275P": {
                "id": 48238,
                "inheritance": "AD"
            },
            "RNU6-1288P": {
                "id": 48251,
                "inheritance": "AD"
            },
            "RNU6-1290P": {
                "id": 48253,
                "inheritance": "AD"
            },
            "RNU6-1312P": {
                "id": 48275,
                "inheritance": "AD"
            },
            "RNU6-1320P": {
                "id": 48283,
                "inheritance": "AD"
            },
            "RNU6-1333P": {
                "id": 48296,
                "inheritance": "AD"
            },
            "GACAT1": {
                "id": 48336,
                "inheritance": "AD"
            },
            "UBE2F-SCLY": {
                "id": 48339,
                "inheritance": "AD"
            },
            "RNU1-31P": {
                "id": 48373,
                "inheritance": "AD"
            },
            "RNU1-32P": {
                "id": 48374,
                "inheritance": "AD"
            },
            "RNU1-38P": {
                "id": 48380,
                "inheritance": "AD"
            },
            "RNU1-93P": {
                "id": 48435,
                "inheritance": "AD"
            },
            "RNU1-133P": {
                "id": 48475,
                "inheritance": "AD"
            },
            "RNU2-9P": {
                "id": 48502,
                "inheritance": "AD"
            },
            "RNU2-13P": {
                "id": 48506,
                "inheritance": "AD"
            },
            "RNU2-21P": {
                "id": 48514,
                "inheritance": "AD"
            },
            "RNU2-22P": {
                "id": 48515,
                "inheritance": "AD"
            },
            "RNU2-39P": {
                "id": 48532,
                "inheritance": "AD"
            },
            "RNU2-41P": {
                "id": 48534,
                "inheritance": "AD"
            },
            "RNU2-63P": {
                "id": 48556,
                "inheritance": "AD"
            },
            "HDLBP": {
                "id": 4857,
                "inheritance": "AD"
            },
            "GPR1-AS": {
                "id": 48602,
                "inheritance": "AD"
            },
            "SCHLAP1": {
                "id": 48603,
                "inheritance": "AD"
            },
            "MED15P3": {
                "id": 48652,
                "inheritance": "AD"
            },
            "MED15P4": {
                "id": 48653,
                "inheritance": "AD"
            },
            "MED15P5": {
                "id": 48654,
                "inheritance": "AD"
            },
            "MED15P8": {
                "id": 48657,
                "inheritance": "AD"
            },
            "FTCDNL1": {
                "id": 48661,
                "inheritance": "AD"
            },
            "TEX41": {
                "id": 48667,
                "inheritance": "AD"
            },
            "LINC00954": {
                "id": 48668,
                "inheritance": "AD"
            },
            "HNRNPDLP2": {
                "id": 48753,
                "inheritance": "AD"
            },
            "HNRNPA3P15": {
                "id": 48761,
                "inheritance": "AD"
            },
            "HNRNPA1P35": {
                "id": 48764,
                "inheritance": "AD"
            },
            "HNRNPA1P39": {
                "id": 48768,
                "inheritance": "AD"
            },
            "HNRNPA1P47": {
                "id": 48777,
                "inheritance": "AD"
            },
            "HNRNPA1P51": {
                "id": 48781,
                "inheritance": "AD"
            },
            "HNRNPA1P57": {
                "id": 48787,
                "inheritance": "AD"
            },
            "HNRNPA1P61": {
                "id": 48791,
                "inheritance": "AD"
            },
            "HNRNPA1P66": {
                "id": 48796,
                "inheritance": "AD"
            },
            "HNRNPCP2": {
                "id": 48814,
                "inheritance": "AD"
            },
            "CAPN10-AS1": {
                "id": 48839,
                "inheritance": "AD"
            },
            "KNOP1P3": {
                "id": 48921,
                "inheritance": "AD"
            },
            "HIBCH": {
                "id": 4908,
                "inheritance": "AD"
            },
            "GRAMD4P8": {
                "id": 49143,
                "inheritance": "AD"
            },
            "LINC01087": {
                "id": 49144,
                "inheritance": "AD"
            },
            "BMS1P19": {
                "id": 49163,
                "inheritance": "AD"
            },
            "HSPE1-MOB4": {
                "id": 49184,
                "inheritance": "AD"
            },
            "INO80B-WBP1": {
                "id": 49199,
                "inheritance": "AD"
            },
            "LINC01090": {
                "id": 49201,
                "inheritance": "AD"
            },
            "RPL7P61": {
                "id": 49217,
                "inheritance": "AD"
            },
            "LINC01103": {
                "id": 49225,
                "inheritance": "AD"
            },
            "LINC01104": {
                "id": 49226,
                "inheritance": "AD"
            },
            "ZBTB45P1": {
                "id": 49227,
                "inheritance": "AD"
            },
            "ZBTB45P2": {
                "id": 49228,
                "inheritance": "AD"
            },
            "LINC01107": {
                "id": 49229,
                "inheritance": "AD"
            },
            "HK2": {
                "id": 4923,
                "inheritance": "AD"
            },
            "LINC01114": {
                "id": 49245,
                "inheritance": "AD"
            },
            "ERVW-12": {
                "id": 49251,
                "inheritance": "AD"
            },
            "ERVW-13": {
                "id": 49252,
                "inheritance": "AD"
            },
            "ERVW-14": {
                "id": 49253,
                "inheritance": "AD"
            },
            "LINC00298": {
                "id": 49257,
                "inheritance": "AD"
            },
            "LINC01115": {
                "id": 49258,
                "inheritance": "AD"
            },
            "LINC01116": {
                "id": 49259,
                "inheritance": "AD"
            },
            "LINC01117": {
                "id": 49260,
                "inheritance": "AD"
            },
            "LINC01118": {
                "id": 49261,
                "inheritance": "AD"
            },
            "LINC01119": {
                "id": 49262,
                "inheritance": "AD"
            },
            "LINC01120": {
                "id": 49265,
                "inheritance": "AD"
            },
            "LINC01121": {
                "id": 49266,
                "inheritance": "AD"
            },
            "LINC01122": {
                "id": 49267,
                "inheritance": "AD"
            },
            "LINC01123": {
                "id": 49269,
                "inheritance": "AD"
            },
            "LINC01124": {
                "id": 49270,
                "inheritance": "AD"
            },
            "PAX8-AS1": {
                "id": 49271,
                "inheritance": "AD"
            },
            "C2orf92": {
                "id": 49272,
                "inheritance": "AD"
            },
            "RGPD4-AS1": {
                "id": 49273,
                "inheritance": "AD"
            },
            "MYT1L-AS1": {
                "id": 49274,
                "inheritance": "AD"
            },
            "LINC01126": {
                "id": 49275,
                "inheritance": "AD"
            },
            "RAB6C-AS1": {
                "id": 49278,
                "inheritance": "AD"
            },
            "FAR2P2": {
                "id": 49279,
                "inheritance": "AD"
            },
            "KLF2P1": {
                "id": 49280,
                "inheritance": "AD"
            },
            "KLF2P2": {
                "id": 49281,
                "inheritance": "AD"
            },
            "KLF2P3": {
                "id": 49282,
                "inheritance": "AD"
            },
            "KLF2P4": {
                "id": 49283,
                "inheritance": "AD"
            },
            "FAR2P1": {
                "id": 49284,
                "inheritance": "AD"
            },
            "FAR2P3": {
                "id": 49285,
                "inheritance": "AD"
            },
            "FAR2P4": {
                "id": 49286,
                "inheritance": "AD"
            },
            "CEBPZOS": {
                "id": 49288,
                "inheritance": "AD"
            },
            "RNASEH1-AS1": {
                "id": 49289,
                "inheritance": "AD"
            },
            "LINC01127": {
                "id": 49292,
                "inheritance": "AD"
            },
            "TPT1P2": {
                "id": 49294,
                "inheritance": "AD"
            },
            "TPT1P11": {
                "id": 49302,
                "inheritance": "AD"
            },
            "HSPE1P9": {
                "id": 49328,
                "inheritance": "AD"
            },
            "HSPE1P13": {
                "id": 49332,
                "inheritance": "AD"
            },
            "YWHAEP5": {
                "id": 49439,
                "inheritance": "AD"
            },
            "LINC01143": {
                "id": 49458,
                "inheritance": "AD"
            },
            "IGKV1OR2-2": {
                "id": 49465,
                "inheritance": "AD"
            },
            "TXNP5": {
                "id": 49485,
                "inheritance": "AD"
            },
            "NACAP4": {
                "id": 49491,
                "inheritance": "AD"
            },
            "LINC01158": {
                "id": 49513,
                "inheritance": "AD"
            },
            "LINC01159": {
                "id": 49514,
                "inheritance": "AD"
            },
            "LINC01173": {
                "id": 49545,
                "inheritance": "AD"
            },
            "STIP1P1": {
                "id": 49552,
                "inheritance": "AD"
            },
            "STIP1P2": {
                "id": 49553,
                "inheritance": "AD"
            },
            "LINC01185": {
                "id": 49572,
                "inheritance": "AD"
            },
            "LINC01191": {
                "id": 49595,
                "inheritance": "AD"
            },
            "PGM5P4": {
                "id": 49605,
                "inheritance": "AD"
            },
            "EIF1P7": {
                "id": 49620,
                "inheritance": "AD"
            },
            "PDSS1P2": {
                "id": 49741,
                "inheritance": "AD"
            },
            "GTF3AP3": {
                "id": 49746,
                "inheritance": "AD"
            },
            "LINC01237": {
                "id": 49793,
                "inheritance": "AD"
            },
            "LINC01238": {
                "id": 49795,
                "inheritance": "AD"
            },
            "MIR7515HG": {
                "id": 49838,
                "inheritance": "AD"
            },
            "MIR7515": {
                "id": 49839,
                "inheritance": "AD"
            },
            "LINC01246": {
                "id": 49840,
                "inheritance": "AD"
            },
            "LINC01247": {
                "id": 49841,
                "inheritance": "AD"
            },
            "LINC01248": {
                "id": 49842,
                "inheritance": "AD"
            },
            "LINC01249": {
                "id": 49843,
                "inheritance": "AD"
            },
            "LINC01250": {
                "id": 49844,
                "inheritance": "AD"
            },
            "MIR6809": {
                "id": 49926,
                "inheritance": "AD"
            },
            "MIR6811": {
                "id": 49944,
                "inheritance": "AD"
            },
            "HMGB1P3": {
                "id": 4995,
                "inheritance": "AD"
            },
            "HMGB1P4": {
                "id": 4996,
                "inheritance": "AD"
            },
            "MIR7158": {
                "id": 49971,
                "inheritance": "AD"
            },
            "MIR6810": {
                "id": 49987,
                "inheritance": "AD"
            },
            "MIR8080": {
                "id": 49989,
                "inheritance": "AD"
            },
            "MIR7157": {
                "id": 50010,
                "inheritance": "AD"
            },
            "MIR6888": {
                "id": 50071,
                "inheritance": "AD"
            },
            "MIR7704": {
                "id": 50089,
                "inheritance": "AD"
            },
            "MIR6071": {
                "id": 50229,
                "inheritance": "AD"
            },
            "MIR6513": {
                "id": 50247,
                "inheritance": "AD"
            },
            "MIR4433B": {
                "id": 50258,
                "inheritance": "AD"
            },
            "MIR6512": {
                "id": 50259,
                "inheritance": "AD"
            },
            "MIR548BA": {
                "id": 50260,
                "inheritance": "AD"
            },
            "MIR7845": {
                "id": 50267,
                "inheritance": "AD"
            },
            "HNMT": {
                "id": 5028,
                "inheritance": "AD"
            },
            "LINC01280": {
                "id": 50336,
                "inheritance": "AD"
            },
            "LINC01291": {
                "id": 50358,
                "inheritance": "AD"
            },
            "LINC01293": {
                "id": 50362,
                "inheritance": "AD"
            },
            "SNORD132": {
                "id": 50413,
                "inheritance": "AD"
            },
            "NUTF2P8": {
                "id": 50457,
                "inheritance": "AD"
            },
            "LINC01304": {
                "id": 50472,
                "inheritance": "AD"
            },
            "BIRC6-AS2": {
                "id": 50490,
                "inheritance": "AD"
            },
            "VDAC1P13": {
                "id": 50515,
                "inheritance": "AD"
            },
            "LINC01317": {
                "id": 50523,
                "inheritance": "AD"
            },
            "LINC01318": {
                "id": 50524,
                "inheritance": "AD"
            },
            "LINC01320": {
                "id": 50526,
                "inheritance": "AD"
            },
            "MIR217HG": {
                "id": 50537,
                "inheritance": "AD"
            },
            "TLX2": {
                "id": 5057,
                "inheritance": "AD"
            },
            "DIRC3-AS1": {
                "id": 50636,
                "inheritance": "AD"
            },
            "LINC01376": {
                "id": 50637,
                "inheritance": "AD"
            },
            "DLX2-AS1": {
                "id": 50638,
                "inheritance": "AD"
            },
            "HAGLROS": {
                "id": 50646,
                "inheritance": "AD"
            },
            "LINC01381": {
                "id": 50653,
                "inheritance": "AD"
            },
            "LINC01412": {
                "id": 50704,
                "inheritance": "AD"
            },
            "LANCL1-AS1": {
                "id": 50727,
                "inheritance": "AD"
            },
            "LYARP1": {
                "id": 50747,
                "inheritance": "AD"
            },
            "MIR8485": {
                "id": 50839,
                "inheritance": "AD"
            },
            "MIR9500": {
                "id": 50841,
                "inheritance": "AD"
            },
            "GACAT3": {
                "id": 50847,
                "inheritance": "AD"
            },
            "LINC01460": {
                "id": 50858,
                "inheritance": "AD"
            },
            "RNY4P34": {
                "id": 50882,
                "inheritance": "AD"
            },
            "PARTICL": {
                "id": 50886,
                "inheritance": "AD"
            },
            "ERVK9-2": {
                "id": 50908,
                "inheritance": "AD"
            },
            "ID2-AS1": {
                "id": 51103,
                "inheritance": "AD"
            },
            "LINC01473": {
                "id": 51109,
                "inheritance": "AD"
            },
            "ATP6V1B1-AS1": {
                "id": 51118,
                "inheritance": "AD"
            },
            "ST3GAL5-AS1": {
                "id": 51129,
                "inheritance": "AD"
            },
            "LINC01494": {
                "id": 51152,
                "inheritance": "AD"
            },
            "PGM5P4-AS1": {
                "id": 51195,
                "inheritance": "AD"
            },
            "KIAA2012": {
                "id": 51250,
                "inheritance": "AD"
            },
            "NRIR": {
                "id": 51269,
                "inheritance": "AD"
            },
            "B3GALNT1P1": {
                "id": 51302,
                "inheritance": "AD"
            },
            "HOXD@	": {
                "id": 5131,
                "inheritance": "AD"
            },
            "HOXD1": {
                "id": 5132,
                "inheritance": "AD"
            },
            "HOXD10": {
                "id": 5133,
                "inheritance": "AD"
            },
            "FAM183DP": {
                "id": 51331,
                "inheritance": "AD"
            },
            "HOXD11": {
                "id": 5134,
                "inheritance": "AD"
            },
            "HOXD12": {
                "id": 5135,
                "inheritance": "AD"
            },
            "HOXD13": {
                "id": 5136,
                "inheritance": "AD"
            },
            "HOXD3": {
                "id": 5137,
                "inheritance": "AD"
            },
            "BICD1P1": {
                "id": 51374,
                "inheritance": "AD"
            },
            "ERVK-30": {
                "id": 51378,
                "inheritance": "AD"
            },
            "HOXD4": {
                "id": 5138,
                "inheritance": "AD"
            },
            "HOXD8": {
                "id": 5139,
                "inheritance": "AD"
            },
            "SNORA105B": {
                "id": 51398,
                "inheritance": "AD"
            },
            "HOXD9": {
                "id": 5140,
                "inheritance": "AD"
            },
            "DALIR": {
                "id": 51429,
                "inheritance": "AD"
            },
            "HPCAL1": {
                "id": 5145,
                "inheritance": "AD"
            },
            "EEF1B2P7": {
                "id": 51454,
                "inheritance": "AD"
            },
            "EEF1E1P1": {
                "id": 51459,
                "inheritance": "AD"
            },
            "GPAA1P2": {
                "id": 51484,
                "inheritance": "AD"
            },
            "ACTG1P22": {
                "id": 51502,
                "inheritance": "AD"
            },
            "WASF1P1": {
                "id": 51533,
                "inheritance": "AD"
            },
            "SAP18P2": {
                "id": 51568,
                "inheritance": "AD"
            },
            "RPL23AP88": {
                "id": 51579,
                "inheritance": "AD"
            },
            "LINC01593": {
                "id": 51583,
                "inheritance": "AD"
            },
            "LINC01594": {
                "id": 51584,
                "inheritance": "AD"
            },
            "SULT1C2P2": {
                "id": 51595,
                "inheritance": "AD"
            },
            "SETD6P1": {
                "id": 51596,
                "inheritance": "AD"
            },
            "SMIM12P1": {
                "id": 51598,
                "inheritance": "AD"
            },
            "C1GALT1C1L": {
                "id": 51617,
                "inheritance": "AD"
            },
            "ACTP1": {
                "id": 51621,
                "inheritance": "AD"
            },
            "RPL23AP92": {
                "id": 51627,
                "inheritance": "AD"
            },
            "ZPAXP": {
                "id": 51635,
                "inheritance": "AD"
            },
            "MYL6BP1": {
                "id": 51647,
                "inheritance": "AD"
            },
            "CROCC2": {
                "id": 51677,
                "inheritance": "AD"
            },
            "SEPT14P2": {
                "id": 51686,
                "inheritance": "AD"
            },
            "AGFG1": {
                "id": 5175,
                "inheritance": "AD"
            },
            "MYOSLID": {
                "id": 51821,
                "inheritance": "AD"
            },
            "SDR42E1P5": {
                "id": 51832,
                "inheritance": "AD"
            },
            "LINC01614": {
                "id": 51847,
                "inheritance": "AD"
            },
            "SNORA112": {
                "id": 51850,
                "inheritance": "AD"
            },
            "SNORA115": {
                "id": 51853,
                "inheritance": "AD"
            },
            "SMC4P1": {
                "id": 51919,
                "inheritance": "AD"
            },
            "VDAC2P4": {
                "id": 51932,
                "inheritance": "AD"
            },
            "MTCYBP10": {
                "id": 51961,
                "inheritance": "AD"
            },
            "MTCYBP11": {
                "id": 51962,
                "inheritance": "AD"
            },
            "MTCYBP7": {
                "id": 51964,
                "inheritance": "AD"
            },
            "MTCYBP8": {
                "id": 51965,
                "inheritance": "AD"
            },
            "MTCYBP9": {
                "id": 51966,
                "inheritance": "AD"
            },
            "MIR3681HG": {
                "id": 52001,
                "inheritance": "AD"
            },
            "MIR4432HG": {
                "id": 52005,
                "inheritance": "AD"
            },
            "MTCO1P7": {
                "id": 52009,
                "inheritance": "AD"
            },
            "HS6ST1": {
                "id": 5201,
                "inheritance": "AD"
            },
            "MTCO1P16": {
                "id": 52018,
                "inheritance": "AD"
            },
            "MTCO1P17": {
                "id": 52019,
                "inheritance": "AD"
            },
            "MTCO1P18": {
                "id": 52020,
                "inheritance": "AD"
            },
            "MTCO2P7": {
                "id": 52023,
                "inheritance": "AD"
            },
            "MTCO2P16": {
                "id": 52032,
                "inheritance": "AD"
            },
            "MTCO2P17": {
                "id": 52033,
                "inheritance": "AD"
            },
            "MTCO2P18": {
                "id": 52034,
                "inheritance": "AD"
            },
            "MTCO3P7": {
                "id": 52037,
                "inheritance": "AD"
            },
            "MTCO3P16": {
                "id": 52046,
                "inheritance": "AD"
            },
            "MTCO3P17": {
                "id": 52047,
                "inheritance": "AD"
            },
            "MTCO3P18": {
                "id": 52048,
                "inheritance": "AD"
            },
            "MTATP6P16": {
                "id": 52061,
                "inheritance": "AD"
            },
            "MTATP6P17": {
                "id": 52062,
                "inheritance": "AD"
            },
            "MTND3P15": {
                "id": 52075,
                "inheritance": "AD"
            },
            "MTND3P16": {
                "id": 52076,
                "inheritance": "AD"
            },
            "MTND3P17": {
                "id": 52077,
                "inheritance": "AD"
            },
            "MTND3P18": {
                "id": 52078,
                "inheritance": "AD"
            },
            "MTCO1P42": {
                "id": 52107,
                "inheritance": "AD"
            },
            "MTCO1P43": {
                "id": 52108,
                "inheritance": "AD"
            },
            "MTCO1P44": {
                "id": 52109,
                "inheritance": "AD"
            },
            "MTCO1P45": {
                "id": 52110,
                "inheritance": "AD"
            },
            "MTCO1P46": {
                "id": 52111,
                "inheritance": "AD"
            },
            "MTCO1P48": {
                "id": 52113,
                "inheritance": "AD"
            },
            "MTCO1P54": {
                "id": 52119,
                "inheritance": "AD"
            },
            "MTCO3P5": {
                "id": 52123,
                "inheritance": "AD"
            },
            "MTCO2P5": {
                "id": 52124,
                "inheritance": "AD"
            },
            "MTCO3P43": {
                "id": 52146,
                "inheritance": "AD"
            },
            "MTCO3P45": {
                "id": 52148,
                "inheritance": "AD"
            },
            "MTATP6P26": {
                "id": 52182,
                "inheritance": "AD"
            },
            "MTATP6P28": {
                "id": 52184,
                "inheritance": "AD"
            },
            "SNORA10B": {
                "id": 52188,
                "inheritance": "AD"
            },
            "SNORA40B": {
                "id": 52204,
                "inheritance": "AD"
            },
            "SNORA70I": {
                "id": 52215,
                "inheritance": "AD"
            },
            "SNORD53B": {
                "id": 52229,
                "inheritance": "AD"
            },
            "SNORD70B": {
                "id": 52233,
                "inheritance": "AD"
            },
            "SNORD3K": {
                "id": 52244,
                "inheritance": "AD"
            },
            "LINC01628": {
                "id": 52259,
                "inheritance": "AD"
            },
            "DNAJB2": {
                "id": 5228,
                "inheritance": "AD"
            },
            "NOC2LP1": {
                "id": 52285,
                "inheritance": "AD"
            },
            "NOC2LP2": {
                "id": 52286,
                "inheritance": "AD"
            },
            "CDK8P2": {
                "id": 52296,
                "inheritance": "AD"
            },
            "MTCYBP39": {
                "id": 52307,
                "inheritance": "AD"
            },
            "GPAT2P1": {
                "id": 52330,
                "inheritance": "AD"
            },
            "GPAT2P2": {
                "id": 52331,
                "inheritance": "AD"
            },
            "MTND5P46": {
                "id": 52335,
                "inheritance": "AD"
            },
            "MTND4P40": {
                "id": 52336,
                "inheritance": "AD"
            },
            "RPL10P6": {
                "id": 52343,
                "inheritance": "AD"
            },
            "DHFRP3": {
                "id": 52354,
                "inheritance": "AD"
            },
            "XIAPP3": {
                "id": 52377,
                "inheritance": "AD"
            },
            "TEX51": {
                "id": 52387,
                "inheritance": "AD"
            },
            "FAM237A": {
                "id": 52388,
                "inheritance": "AD"
            },
            "UBE2V1P14": {
                "id": 52412,
                "inheritance": "AD"
            },
            "LINC01789": {
                "id": 52578,
                "inheritance": "AD"
            },
            "LINC01790": {
                "id": 52579,
                "inheritance": "AD"
            },
            "PKP4-AS1": {
                "id": 52580,
                "inheritance": "AD"
            },
            "LINC01792": {
                "id": 52582,
                "inheritance": "AD"
            },
            "LINC01793": {
                "id": 52583,
                "inheritance": "AD"
            },
            "LINC01794": {
                "id": 52584,
                "inheritance": "AD"
            },
            "LINC01795": {
                "id": 52585,
                "inheritance": "AD"
            },
            "LINC01796": {
                "id": 52586,
                "inheritance": "AD"
            },
            "LINC01797": {
                "id": 52587,
                "inheritance": "AD"
            },
            "LINC01798": {
                "id": 52588,
                "inheritance": "AD"
            },
            "LINC01799": {
                "id": 52589,
                "inheritance": "AD"
            },
            "LINC01800": {
                "id": 52590,
                "inheritance": "AD"
            },
            "LINC01802": {
                "id": 52591,
                "inheritance": "AD"
            },
            "LINC01803": {
                "id": 52595,
                "inheritance": "AD"
            },
            "LINC01804": {
                "id": 52596,
                "inheritance": "AD"
            },
            "LINC01805": {
                "id": 52597,
                "inheritance": "AD"
            },
            "LINC01806": {
                "id": 52599,
                "inheritance": "AD"
            },
            "HSPD1": {
                "id": 5261,
                "inheritance": "AD"
            },
            "LINC01807": {
                "id": 52610,
                "inheritance": "AD"
            },
            "LINC01808": {
                "id": 52611,
                "inheritance": "AD"
            },
            "LINC01809": {
                "id": 52612,
                "inheritance": "AD"
            },
            "LINC01810": {
                "id": 52613,
                "inheritance": "AD"
            },
            "LINC01812": {
                "id": 52616,
                "inheritance": "AD"
            },
            "LINC01813": {
                "id": 52617,
                "inheritance": "AD"
            },
            "LINC01814": {
                "id": 52618,
                "inheritance": "AD"
            },
            "LINC01815": {
                "id": 52619,
                "inheritance": "AD"
            },
            "LINC01816": {
                "id": 52621,
                "inheritance": "AD"
            },
            "LINC01817": {
                "id": 52622,
                "inheritance": "AD"
            },
            "LINC01818": {
                "id": 52623,
                "inheritance": "AD"
            },
            "LINC01819": {
                "id": 52624,
                "inheritance": "AD"
            },
            "LINC01820": {
                "id": 52625,
                "inheritance": "AD"
            },
            "LINC01821": {
                "id": 52626,
                "inheritance": "AD"
            },
            "LINC01822": {
                "id": 52627,
                "inheritance": "AD"
            },
            "LINC01823": {
                "id": 52628,
                "inheritance": "AD"
            },
            "PIK3CDP1": {
                "id": 52629,
                "inheritance": "AD"
            },
            "LINC01824": {
                "id": 52630,
                "inheritance": "AD"
            },
            "LINC01825": {
                "id": 52631,
                "inheritance": "AD"
            },
            "LINC01826": {
                "id": 52632,
                "inheritance": "AD"
            },
            "LINC01827": {
                "id": 52633,
                "inheritance": "AD"
            },
            "LINC01828": {
                "id": 52634,
                "inheritance": "AD"
            },
            "LINC01829": {
                "id": 52635,
                "inheritance": "AD"
            },
            "LINC01830": {
                "id": 52636,
                "inheritance": "AD"
            },
            "LINC01831": {
                "id": 52637,
                "inheritance": "AD"
            },
            "LINC01832": {
                "id": 52638,
                "inheritance": "AD"
            },
            "LINC01833": {
                "id": 52644,
                "inheritance": "AD"
            },
            "LINC01849": {
                "id": 52665,
                "inheritance": "AD"
            },
            "LINC01850": {
                "id": 52666,
                "inheritance": "AD"
            },
            "LINC01851": {
                "id": 52667,
                "inheritance": "AD"
            },
            "LINC01853": {
                "id": 52669,
                "inheritance": "AD"
            },
            "LINC01854": {
                "id": 52670,
                "inheritance": "AD"
            },
            "LINC01856": {
                "id": 52672,
                "inheritance": "AD"
            },
            "LINC01857": {
                "id": 52673,
                "inheritance": "AD"
            },
            "PLAC9P1": {
                "id": 52678,
                "inheritance": "AD"
            },
            "LINC01865": {
                "id": 52684,
                "inheritance": "AD"
            },
            "LINC01866": {
                "id": 52685,
                "inheritance": "AD"
            },
            "LINC01867": {
                "id": 52687,
                "inheritance": "AD"
            },
            "LINC01868": {
                "id": 52688,
                "inheritance": "AD"
            },
            "LINC01870": {
                "id": 52689,
                "inheritance": "AD"
            },
            "HSPE1": {
                "id": 5269,
                "inheritance": "AD"
            },
            "LINC01871": {
                "id": 52690,
                "inheritance": "AD"
            },
            "LINC01873": {
                "id": 52692,
                "inheritance": "AD"
            },
            "LINC01874": {
                "id": 52693,
                "inheritance": "AD"
            },
            "LINC01875": {
                "id": 52694,
                "inheritance": "AD"
            },
            "LINC01876": {
                "id": 52695,
                "inheritance": "AD"
            },
            "LINC01877": {
                "id": 52696,
                "inheritance": "AD"
            },
            "LINC01878": {
                "id": 52697,
                "inheritance": "AD"
            },
            "LINC01880": {
                "id": 52699,
                "inheritance": "AD"
            },
            "LINC01881": {
                "id": 52700,
                "inheritance": "AD"
            },
            "LINC01883": {
                "id": 52702,
                "inheritance": "AD"
            },
            "LINC01884": {
                "id": 52703,
                "inheritance": "AD"
            },
            "LINC01885": {
                "id": 52704,
                "inheritance": "AD"
            },
            "LINC01886": {
                "id": 52705,
                "inheritance": "AD"
            },
            "LINC01888": {
                "id": 52707,
                "inheritance": "AD"
            },
            "LINC01889": {
                "id": 52708,
                "inheritance": "AD"
            },
            "LINC01890": {
                "id": 52709,
                "inheritance": "AD"
            },
            "LINC01891": {
                "id": 52710,
                "inheritance": "AD"
            },
            "LINC01907": {
                "id": 52726,
                "inheritance": "AD"
            },
            "LINC01911": {
                "id": 52730,
                "inheritance": "AD"
            },
            "LINC01913": {
                "id": 52732,
                "inheritance": "AD"
            },
            "LINC01914": {
                "id": 52733,
                "inheritance": "AD"
            },
            "LINC01918": {
                "id": 52737,
                "inheritance": "AD"
            },
            "LINC01920": {
                "id": 52738,
                "inheritance": "AD"
            },
            "LINC01921": {
                "id": 52740,
                "inheritance": "AD"
            },
            "LINC01923": {
                "id": 52742,
                "inheritance": "AD"
            },
            "LINC01931": {
                "id": 52743,
                "inheritance": "AD"
            },
            "LINC01934": {
                "id": 52757,
                "inheritance": "AD"
            },
            "LINC01935": {
                "id": 52758,
                "inheritance": "AD"
            },
            "LINC01936": {
                "id": 52759,
                "inheritance": "AD"
            },
            "LINC01937": {
                "id": 52760,
                "inheritance": "AD"
            },
            "LINC01939": {
                "id": 52762,
                "inheritance": "AD"
            },
            "LINC01940": {
                "id": 52763,
                "inheritance": "AD"
            },
            "LINC01941": {
                "id": 52764,
                "inheritance": "AD"
            },
            "LINC01943": {
                "id": 52767,
                "inheritance": "AD"
            },
            "LINC01945": {
                "id": 52769,
                "inheritance": "AD"
            },
            "LINC01946": {
                "id": 52770,
                "inheritance": "AD"
            },
            "LINC01953": {
                "id": 52776,
                "inheritance": "AD"
            },
            "LINC01956": {
                "id": 52777,
                "inheritance": "AD"
            },
            "LINC01954": {
                "id": 52779,
                "inheritance": "AD"
            },
            "LINC01955": {
                "id": 52780,
                "inheritance": "AD"
            },
            "BBIP1P1": {
                "id": 52781,
                "inheritance": "AD"
            },
            "TBC1D8-AS1": {
                "id": 52782,
                "inheritance": "AD"
            },
            "LINC01958": {
                "id": 52784,
                "inheritance": "AD"
            },
            "LINC01960": {
                "id": 52785,
                "inheritance": "AD"
            },
            "LINC01961": {
                "id": 52786,
                "inheritance": "AD"
            },
            "LINC01964": {
                "id": 52789,
                "inheritance": "AD"
            },
            "LINC01965": {
                "id": 52790,
                "inheritance": "AD"
            },
            "LINC01966": {
                "id": 52792,
                "inheritance": "AD"
            },
            "FOXN2": {
                "id": 5281,
                "inheritance": "AD"
            },
            "HTR2B": {
                "id": 5294,
                "inheritance": "AD"
            },
            "LINC02245": {
                "id": 53134,
                "inheritance": "AD"
            },
            "ERVH-8": {
                "id": 53421,
                "inheritance": "AD"
            },
            "ERVH-10": {
                "id": 53423,
                "inheritance": "AD"
            },
            "CCDC195": {
                "id": 53441,
                "inheritance": "AD"
            },
            "LINC02478": {
                "id": 53446,
                "inheritance": "AD"
            },
            "ICOS": {
                "id": 5351,
                "inheritance": "AD"
            },
            "CNNM3-DT": {
                "id": 53592,
                "inheritance": "AD"
            },
            "ID2": {
                "id": 5361,
                "inheritance": "AD"
            },
            "ASDURF": {
                "id": 53619,
                "inheritance": "AD"
            },
            "LINC02572": {
                "id": 53634,
                "inheritance": "AD"
            },
            "IDDM13": {
                "id": 5367,
                "inheritance": "AD"
            },
            "IDDM14": {
                "id": 5368,
                "inheritance": "AD"
            },
            "PPIAP60": {
                "id": 53684,
                "inheritance": "AD"
            },
            "PPIAP61": {
                "id": 53685,
                "inheritance": "AD"
            },
            "PPIAP62": {
                "id": 53686,
                "inheritance": "AD"
            },
            "PPIAP63": {
                "id": 53687,
                "inheritance": "AD"
            },
            "PPIAP64": {
                "id": 53688,
                "inheritance": "AD"
            },
            "PPIAP65": {
                "id": 53689,
                "inheritance": "AD"
            },
            "PPIAP66": {
                "id": 53690,
                "inheritance": "AD"
            },
            "PPIAP67": {
                "id": 53691,
                "inheritance": "AD"
            },
            "PPIAP68": {
                "id": 53692,
                "inheritance": "AD"
            },
            "LINC02576": {
                "id": 53748,
                "inheritance": "AD"
            },
            "LINC02580": {
                "id": 53751,
                "inheritance": "AD"
            },
            "AOX3P-AOX2P": {
                "id": 53766,
                "inheritance": "AD"
            },
            "IDDM7": {
                "id": 5378,
                "inheritance": "AD"
            },
            "IDH1": {
                "id": 5382,
                "inheritance": "AD"
            },
            "SP110": {
                "id": 5401,
                "inheritance": "AD"
            },
            "ANXA4": {
                "id": 542,
                "inheritance": "AD"
            },
            "IGFBP2": {
                "id": 5471,
                "inheritance": "AD"
            },
            "IGFBP5": {
                "id": 5474,
                "inheritance": "AD"
            },
            "AOX1": {
                "id": 553,
                "inheritance": "AD"
            },
            "IGK": {
                "id": 5715,
                "inheritance": "AD"
            },
            "IGKC": {
                "id": 5716,
                "inheritance": "AD"
            },
            "IGKDEL": {
                "id": 5717,
                "inheritance": "AD"
            },
            "IGKJ1": {
                "id": 5719,
                "inheritance": "AD"
            },
            "IGKJ2": {
                "id": 5720,
                "inheritance": "AD"
            },
            "IGKJ3": {
                "id": 5721,
                "inheritance": "AD"
            },
            "IGKJ4": {
                "id": 5722,
                "inheritance": "AD"
            },
            "IGKJ5": {
                "id": 5723,
                "inheritance": "AD"
            },
            "IGKV1-12": {
                "id": 5730,
                "inheritance": "AD"
            },
            "IGKV1-13": {
                "id": 5731,
                "inheritance": "AD"
            },
            "IGKV1-16": {
                "id": 5732,
                "inheritance": "AD"
            },
            "IGKV1-17": {
                "id": 5733,
                "inheritance": "AD"
            },
            "IGKV1-22": {
                "id": 5734,
                "inheritance": "AD"
            },
            "IGKV1-27": {
                "id": 5735,
                "inheritance": "AD"
            },
            "IGKV1-32": {
                "id": 5736,
                "inheritance": "AD"
            },
            "IGKV1-33": {
                "id": 5737,
                "inheritance": "AD"
            },
            "IGKV1-35": {
                "id": 5738,
                "inheritance": "AD"
            },
            "IGKV1-37": {
                "id": 5739,
                "inheritance": "AD"
            },
            "IGKV1-39": {
                "id": 5740,
                "inheritance": "AD"
            },
            "IGKV1-5": {
                "id": 5741,
                "inheritance": "AD"
            },
            "IGKV1-6": {
                "id": 5742,
                "inheritance": "AD"
            },
            "IGKV1-8": {
                "id": 5743,
                "inheritance": "AD"
            },
            "IGKV1-9": {
                "id": 5744,
                "inheritance": "AD"
            },
            "IGKV1D-12": {
                "id": 5746,
                "inheritance": "AD"
            },
            "IGKV1D-13": {
                "id": 5747,
                "inheritance": "AD"
            },
            "IGKV1D-16": {
                "id": 5748,
                "inheritance": "AD"
            },
            "IGKV1D-17": {
                "id": 5749,
                "inheritance": "AD"
            },
            "IGKV1D-22": {
                "id": 5750,
                "inheritance": "AD"
            },
            "IGKV1D-27": {
                "id": 5751,
                "inheritance": "AD"
            },
            "IGKV1D-32": {
                "id": 5752,
                "inheritance": "AD"
            },
            "IGKV1D-33": {
                "id": 5753,
                "inheritance": "AD"
            },
            "IGKV1D-35": {
                "id": 5754,
                "inheritance": "AD"
            },
            "IGKV1D-37": {
                "id": 5755,
                "inheritance": "AD"
            },
            "IGKV1D-39": {
                "id": 5756,
                "inheritance": "AD"
            },
            "IGKV1D-42": {
                "id": 5757,
                "inheritance": "AD"
            },
            "IGKV1D-43": {
                "id": 5758,
                "inheritance": "AD"
            },
            "IGKV1D-8": {
                "id": 5759,
                "inheritance": "AD"
            },
            "IGKV1OR2-1": {
                "id": 5760,
                "inheritance": "AD"
            },
            "IGKV1OR2-0": {
                "id": 5766,
                "inheritance": "AD"
            },
            "IGKV1OR2-108": {
                "id": 5767,
                "inheritance": "AD"
            },
            "IGKV1OR2-11": {
                "id": 5768,
                "inheritance": "AD"
            },
            "IGKV1OR2-3": {
                "id": 5769,
                "inheritance": "AD"
            },
            "IGKV1OR2-6": {
                "id": 5770,
                "inheritance": "AD"
            },
            "IGKV1OR2-9": {
                "id": 5771,
                "inheritance": "AD"
            },
            "IGKV2-10": {
                "id": 5776,
                "inheritance": "AD"
            },
            "IGKV2-14": {
                "id": 5777,
                "inheritance": "AD"
            },
            "IGKV2-18": {
                "id": 5778,
                "inheritance": "AD"
            },
            "IGKV2-19": {
                "id": 5779,
                "inheritance": "AD"
            },
            "IGKV2-23": {
                "id": 5780,
                "inheritance": "AD"
            },
            "IGKV2-24": {
                "id": 5781,
                "inheritance": "AD"
            },
            "IGKV2-26": {
                "id": 5782,
                "inheritance": "AD"
            },
            "IGKV2-28": {
                "id": 5783,
                "inheritance": "AD"
            },
            "IGKV2-29": {
                "id": 5784,
                "inheritance": "AD"
            },
            "IGKV2-30": {
                "id": 5785,
                "inheritance": "AD"
            },
            "IGKV2-36": {
                "id": 5786,
                "inheritance": "AD"
            },
            "IGKV2-38": {
                "id": 5787,
                "inheritance": "AD"
            },
            "IGKV2-4": {
                "id": 5788,
                "inheritance": "AD"
            },
            "IGKV2-40": {
                "id": 5789,
                "inheritance": "AD"
            },
            "IGKV2D-10": {
                "id": 5792,
                "inheritance": "AD"
            },
            "IGKV2D-14": {
                "id": 5793,
                "inheritance": "AD"
            },
            "IGKV2D-18": {
                "id": 5794,
                "inheritance": "AD"
            },
            "IGKV2D-19": {
                "id": 5795,
                "inheritance": "AD"
            },
            "IGKV2D-23": {
                "id": 5796,
                "inheritance": "AD"
            },
            "IGKV2D-24": {
                "id": 5797,
                "inheritance": "AD"
            },
            "IGKV2D-26": {
                "id": 5798,
                "inheritance": "AD"
            },
            "IGKV2D-28": {
                "id": 5799,
                "inheritance": "AD"
            },
            "IGKV2D-29": {
                "id": 5800,
                "inheritance": "AD"
            },
            "IGKV2D-30": {
                "id": 5801,
                "inheritance": "AD"
            },
            "IGKV2D-36": {
                "id": 5802,
                "inheritance": "AD"
            },
            "IGKV2D-38": {
                "id": 5803,
                "inheritance": "AD"
            },
            "IGKV2D-40": {
                "id": 5804,
                "inheritance": "AD"
            },
            "IGKV2OR2-1": {
                "id": 5805,
                "inheritance": "AD"
            },
            "IGKV2OR2-10": {
                "id": 5806,
                "inheritance": "AD"
            },
            "IGKV2OR2-2": {
                "id": 5808,
                "inheritance": "AD"
            },
            "IGKV2OR2-4": {
                "id": 5809,
                "inheritance": "AD"
            },
            "IGKV2OR2-7": {
                "id": 5810,
                "inheritance": "AD"
            },
            "IGKV2OR2-8": {
                "id": 5811,
                "inheritance": "AD"
            },
            "IGKV3-11": {
                "id": 5815,
                "inheritance": "AD"
            },
            "IGKV3-15": {
                "id": 5816,
                "inheritance": "AD"
            },
            "IGKV3-20": {
                "id": 5817,
                "inheritance": "AD"
            },
            "IGKV3-25": {
                "id": 5818,
                "inheritance": "AD"
            },
            "IGKV3-31": {
                "id": 5819,
                "inheritance": "AD"
            },
            "IGKV3-34": {
                "id": 5820,
                "inheritance": "AD"
            },
            "IGKV3-7": {
                "id": 5821,
                "inheritance": "AD"
            },
            "IGKV3D-11": {
                "id": 5823,
                "inheritance": "AD"
            },
            "IGKV3D-15": {
                "id": 5824,
                "inheritance": "AD"
            },
            "IGKV3D-20": {
                "id": 5825,
                "inheritance": "AD"
            },
            "IGKV3D-25": {
                "id": 5826,
                "inheritance": "AD"
            },
            "IGKV3D-31": {
                "id": 5827,
                "inheritance": "AD"
            },
            "IGKV3D-34": {
                "id": 5828,
                "inheritance": "AD"
            },
            "IGKV3D-7": {
                "id": 5829,
                "inheritance": "AD"
            },
            "IGKV3OR2-268": {
                "id": 5830,
                "inheritance": "AD"
            },
            "IGKV3OR2-5": {
                "id": 5832,
                "inheritance": "AD"
            },
            "IGKV4-1": {
                "id": 5834,
                "inheritance": "AD"
            },
            "IGKV5-2": {
                "id": 5835,
                "inheritance": "AD"
            },
            "IGKV6-21": {
                "id": 5836,
                "inheritance": "AD"
            },
            "IGKV6D-21": {
                "id": 5837,
                "inheritance": "AD"
            },
            "IGKV6D-41": {
                "id": 5838,
                "inheritance": "AD"
            },
            "IGKV7-3": {
                "id": 5839,
                "inheritance": "AD"
            },
            "IHH": {
                "id": 5956,
                "inheritance": "AD"
            },
            "IL18R1": {
                "id": 5988,
                "inheritance": "AD"
            },
            "IL18RAP": {
                "id": 5989,
                "inheritance": "AD"
            },
            "IL1A": {
                "id": 5991,
                "inheritance": "AD"
            },
            "IL1B": {
                "id": 5992,
                "inheritance": "AD"
            },
            "IL1R1": {
                "id": 5993,
                "inheritance": "AD"
            },
            "IL1R2": {
                "id": 5994,
                "inheritance": "AD"
            },
            "IL1RL1": {
                "id": 5998,
                "inheritance": "AD"
            },
            "IL1RL2": {
                "id": 5999,
                "inheritance": "AD"
            },
            "IL1RN": {
                "id": 6000,
                "inheritance": "AD"
            },
            "CXCR1": {
                "id": 6026,
                "inheritance": "AD"
            },
            "CXCR2": {
                "id": 6027,
                "inheritance": "AD"
            },
            "CXCR2P1": {
                "id": 6028,
                "inheritance": "AD"
            },
            "APOB": {
                "id": 603,
                "inheritance": "AD"
            },
            "IMMT": {
                "id": 6047,
                "inheritance": "AD"
            },
            "INHA": {
                "id": 6065,
                "inheritance": "AD"
            },
            "INHBB": {
                "id": 6067,
                "inheritance": "AD"
            },
            "INPP1": {
                "id": 6071,
                "inheritance": "AD"
            },
            "INPP4A": {
                "id": 6074,
                "inheritance": "AD"
            },
            "INPP5D": {
                "id": 6079,
                "inheritance": "AD"
            },
            "AQP12B": {
                "id": 6096,
                "inheritance": "AD"
            },
            "IRS1": {
                "id": 6125,
                "inheritance": "AD"
            },
            "ITGA4": {
                "id": 6140,
                "inheritance": "AD"
            },
            "ITGA6": {
                "id": 6142,
                "inheritance": "AD"
            },
            "ITGAV": {
                "id": 6150,
                "inheritance": "AD"
            },
            "ITGB6": {
                "id": 6161,
                "inheritance": "AD"
            },
            "ITM2C": {
                "id": 6175,
                "inheritance": "AD"
            },
            "ITSN2": {
                "id": 6184,
                "inheritance": "AD"
            },
            "ABCD1P1": {
                "id": 62,
                "inheritance": "AD"
            },
            "KCNE4": {
                "id": 6244,
                "inheritance": "AD"
            },
            "KCNF1": {
                "id": 6246,
                "inheritance": "AD"
            },
            "KCNJ13": {
                "id": 6259,
                "inheritance": "AD"
            },
            "KCNJ3": {
                "id": 6264,
                "inheritance": "AD"
            },
            "KCNK12": {
                "id": 6274,
                "inheritance": "AD"
            },
            "KCNK3": {
                "id": 6278,
                "inheritance": "AD"
            },
            "KCNS3": {
                "id": 6302,
                "inheritance": "AD"
            },
            "KHK": {
                "id": 6315,
                "inheritance": "AD"
            },
            "KIF3C": {
                "id": 6321,
                "inheritance": "AD"
            },
            "KIF5C": {
                "id": 6325,
                "inheritance": "AD"
            },
            "KLF7": {
                "id": 6350,
                "inheritance": "AD"
            },
            "KYNU": {
                "id": 6469,
                "inheritance": "AD"
            },
            "AFF3": {
                "id": 6473,
                "inheritance": "AD"
            },
            "LANCL1": {
                "id": 6508,
                "inheritance": "AD"
            },
            "LCT": {
                "id": 6530,
                "inheritance": "AD"
            },
            "LDHAP3": {
                "id": 6538,
                "inheritance": "AD"
            },
            "LHCGR": {
                "id": 6585,
                "inheritance": "AD"
            },
            "LIMS1": {
                "id": 6616,
                "inheritance": "AD"
            },
            "RHOB": {
                "id": 668,
                "inheritance": "AD"
            },
            "LRP1B": {
                "id": 6693,
                "inheritance": "AD"
            },
            "LRP2": {
                "id": 6694,
                "inheritance": "AD"
            },
            "LRRFIP1": {
                "id": 6702,
                "inheritance": "AD"
            },
            "RND3": {
                "id": 671,
                "inheritance": "AD"
            },
            "LTBP1": {
                "id": 6714,
                "inheritance": "AD"
            },
            "LY75": {
                "id": 6729,
                "inheritance": "AD"
            },
            "MXD1": {
                "id": 6761,
                "inheritance": "AD"
            },
            "MAL": {
                "id": 6817,
                "inheritance": "AD"
            },
            "MALL": {
                "id": 6818,
                "inheritance": "AD"
            },
            "MAP2": {
                "id": 6839,
                "inheritance": "AD"
            },
            "ARHGEF4": {
                "id": 684,
                "inheritance": "AD"
            },
            "MAP3K2": {
                "id": 6854,
                "inheritance": "AD"
            },
            "MAP4K3": {
                "id": 6865,
                "inheritance": "AD"
            },
            "MAP4K4": {
                "id": 6866,
                "inheritance": "AD"
            },
            "MAPRE3": {
                "id": 6892,
                "inheritance": "AD"
            },
            "MARCO": {
                "id": 6895,
                "inheritance": "AD"
            },
            "MAT2A": {
                "id": 6904,
                "inheritance": "AD"
            },
            "MATN3": {
                "id": 6909,
                "inheritance": "AD"
            },
            "LAPTM4A": {
                "id": 6924,
                "inheritance": "AD"
            },
            "MCM6": {
                "id": 6949,
                "inheritance": "AD"
            },
            "ARL5A": {
                "id": 696,
                "inheritance": "AD"
            },
            "MDH1": {
                "id": 6970,
                "inheritance": "AD"
            },
            "ARL4C": {
                "id": 698,
                "inheritance": "AD"
            },
            "MEIS1": {
                "id": 7000,
                "inheritance": "AD"
            },
            "MERTK": {
                "id": 7027,
                "inheritance": "AD"
            },
            "MGAT4A": {
                "id": 7047,
                "inheritance": "AD"
            },
            "MGAT5": {
                "id": 7049,
                "inheritance": "AD"
            },
            "ARPC2": {
                "id": 705,
                "inheritance": "AD"
            },
            "MPHOSPH10": {
                "id": 7213,
                "inheritance": "AD"
            },
            "MPV17": {
                "id": 7224,
                "inheritance": "AD"
            },
            "ARVD4": {
                "id": 732,
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
            "MTHFD2": {
                "id": 7434,
                "inheritance": "AD"
            },
            "MTIF2": {
                "id": 7441,
                "inheritance": "AD"
            },
            "MTX2": {
                "id": 7506,
                "inheritance": "AD"
            },
            "MYCN": {
                "id": 7559,
                "inheritance": "AD"
            },
            "MYL1": {
                "id": 7582,
                "inheritance": "AD"
            },
            "MYO1B": {
                "id": 7596,
                "inheritance": "AD"
            },
            "MYO7B": {
                "id": 7607,
                "inheritance": "AD"
            },
            "MYT1L": {
                "id": 7623,
                "inheritance": "AD"
            },
            "NAB1": {
                "id": 7626,
                "inheritance": "AD"
            },
            "ASS1P2": {
                "id": 765,
                "inheritance": "AD"
            },
            "NCK2": {
                "id": 7665,
                "inheritance": "AD"
            },
            "NCKAP1": {
                "id": 7666,
                "inheritance": "AD"
            },
            "NCL": {
                "id": 7667,
                "inheritance": "AD"
            },
            "NCOA1": {
                "id": 7668,
                "inheritance": "AD"
            },
            "NDUFA10": {
                "id": 7684,
                "inheritance": "AD"
            },
            "NDUFB3": {
                "id": 7698,
                "inheritance": "AD"
            },
            "NDUFS1": {
                "id": 7707,
                "inheritance": "AD"
            },
            "NEB": {
                "id": 7720,
                "inheritance": "AD"
            },
            "sep.02": {
                "id": 7729,
                "inheritance": "AD"
            },
            "NEU2": {
                "id": 7759,
                "inheritance": "AD"
            },
            "NEUROD1": {
                "id": 7762,
                "inheritance": "AD"
            },
            "NF1P8": {
                "id": 7767,
                "inheritance": "AD"
            },
            "NFE2L2": {
                "id": 7782,
                "inheritance": "AD"
            },
            "NGEF": {
                "id": 7807,
                "inheritance": "AD"
            },
            "NIDDM1": {
                "id": 7822,
                "inheritance": "AD"
            },
            "ATF2": {
                "id": 784,
                "inheritance": "AD"
            },
            "NMI": {
                "id": 7854,
                "inheritance": "AD"
            },
            "NPAS2": {
                "id": 7895,
                "inheritance": "AD"
            },
            "NPHP1": {
                "id": 7905,
                "inheritance": "AD"
            },
            "ATIC": {
                "id": 794,
                "inheritance": "AD"
            },
            "NPPC": {
                "id": 7941,
                "inheritance": "AD"
            },
            "NR4A2": {
                "id": 7981,
                "inheritance": "AD"
            },
            "NRBP1": {
                "id": 7993,
                "inheritance": "AD"
            },
            "NRP2": {
                "id": 8005,
                "inheritance": "AD"
            },
            "NRXN1": {
                "id": 8008,
                "inheritance": "AD"
            },
            "NTSR2": {
                "id": 8040,
                "inheritance": "AD"
            },
            "NUDCP1": {
                "id": 8046,
                "inheritance": "AD"
            },
            "NUDCP2": {
                "id": 8047,
                "inheritance": "AD"
            },
            "ATP1B3P1": {
                "id": 807,
                "inheritance": "AD"
            },
            "NXPH2": {
                "id": 8076,
                "inheritance": "AD"
            },
            "ODC1": {
                "id": 8109,
                "inheritance": "AD"
            },
            "OSR1": {
                "id": 8111,
                "inheritance": "AD"
            },
            "OFC2": {
                "id": 8121,
                "inheritance": "AD"
            },
            "ATP5A1P2": {
                "id": 828,
                "inheritance": "AD"
            },
            "ATP5BP1": {
                "id": 831,
                "inheritance": "AD"
            },
            "OR7E28P": {
                "id": 8400,
                "inheritance": "AD"
            },
            "OR7E46P": {
                "id": 8420,
                "inheritance": "AD"
            },
            "ATP5G3": {
                "id": 843,
                "inheritance": "AD"
            },
            "OR7E62P": {
                "id": 8438,
                "inheritance": "AD"
            },
            "ORC2": {
                "id": 8488,
                "inheritance": "AD"
            },
            "ORC4": {
                "id": 8490,
                "inheritance": "AD"
            },
            "OTOF": {
                "id": 8515,
                "inheritance": "AD"
            },
            "OTX1": {
                "id": 8521,
                "inheritance": "AD"
            },
            "ATP6V1B1": {
                "id": 853,
                "inheritance": "AD"
            },
            "PABPC1P2": {
                "id": 8559,
                "inheritance": "AD"
            },
            "PAFAH1B1P1": {
                "id": 8577,
                "inheritance": "AD"
            },
            "PAFAH1B1P2": {
                "id": 8578,
                "inheritance": "AD"
            },
            "REG3A": {
                "id": 8601,
                "inheritance": "AD"
            },
            "PARK3": {
                "id": 8608,
                "inheritance": "AD"
            },
            "PAX3": {
                "id": 8617,
                "inheritance": "AD"
            },
            "PAX8": {
                "id": 8622,
                "inheritance": "AD"
            },
            "PCBP1": {
                "id": 8647,
                "inheritance": "AD"
            },
            "PDCD1": {
                "id": 8760,
                "inheritance": "AD"
            },
            "PDE11A": {
                "id": 8773,
                "inheritance": "AD"
            },
            "PDE1A": {
                "id": 8774,
                "inheritance": "AD"
            },
            "PDE6D": {
                "id": 8788,
                "inheritance": "AD"
            },
            "ALDH7A1P2": {
                "id": 879,
                "inheritance": "AD"
            },
            "ACADL": {
                "id": 88,
                "inheritance": "AD"
            },
            "PDK1": {
                "id": 8809,
                "inheritance": "AD"
            },
            "PELI1": {
                "id": 8827,
                "inheritance": "AD"
            },
            "PER2": {
                "id": 8846,
                "inheritance": "AD"
            },
            "PEX13": {
                "id": 8855,
                "inheritance": "AD"
            },
            "KIF1A": {
                "id": 888,
                "inheritance": "AD"
            },
            "AUP1": {
                "id": 891,
                "inheritance": "AD"
            },
            "PHBP4": {
                "id": 8916,
                "inheritance": "AD"
            },
            "SERPINE2": {
                "id": 8951,
                "inheritance": "AD"
            },
            "PIGF": {
                "id": 8962,
                "inheritance": "AD"
            },
            "PKD3": {
                "id": 9013,
                "inheritance": "AD"
            },
            "PKP4": {
                "id": 9026,
                "inheritance": "AD"
            },
            "PLA2R1": {
                "id": 9042,
                "inheritance": "AD"
            },
            "PLCD4": {
                "id": 9062,
                "inheritance": "AD"
            },
            "PLCL1": {
                "id": 9063,
                "inheritance": "AD"
            },
            "PLEK": {
                "id": 9070,
                "inheritance": "AD"
            },
            "PLGLB1": {
                "id": 9072,
                "inheritance": "AD"
            },
            "PLGLB2": {
                "id": 9073,
                "inheritance": "AD"
            },
            "PLGLA": {
                "id": 9074,
                "inheritance": "AD"
            },
            "PMS1": {
                "id": 9121,
                "inheritance": "AD"
            },
            "PNKD": {
                "id": 9153,
                "inheritance": "AD"
            },
            "B3GALT1": {
                "id": 916,
                "inheritance": "AD"
            },
            "POLR2D": {
                "id": 9191,
                "inheritance": "AD"
            },
            "POMC": {
                "id": 9201,
                "inheritance": "AD"
            },
            "POU3F3": {
                "id": 9216,
                "inheritance": "AD"
            },
            "PPIL3": {
                "id": 9262,
                "inheritance": "AD"
            },
            "PPM1B": {
                "id": 9276,
                "inheritance": "AD"
            },
            "PPM1G": {
                "id": 9278,
                "inheritance": "AD"
            },
            "PPP1CB": {
                "id": 9282,
                "inheritance": "AD"
            },
            "PPP1R7": {
                "id": 9295,
                "inheritance": "AD"
            },
            "PPP3R1": {
                "id": 9317,
                "inheritance": "AD"
            },
            "PREB": {
                "id": 9356,
                "inheritance": "AD"
            },
            "PRKAG3": {
                "id": 9387,
                "inheritance": "AD"
            },
            "PRKCE": {
                "id": 9401,
                "inheritance": "AD"
            },
            "PRKD3": {
                "id": 9408,
                "inheritance": "AD"
            },
            "EIF2AK2": {
                "id": 9437,
                "inheritance": "AD"
            },
            "PRKRA": {
                "id": 9438,
                "inheritance": "AD"
            },
            "PROC": {
                "id": 9451,
                "inheritance": "AD"
            },
            "CYTIP": {
                "id": 9506,
                "inheritance": "AD"
            },
            "BARD1": {
                "id": 952,
                "inheritance": "AD"
            },
            "PSMD1": {
                "id": 9554,
                "inheritance": "AD"
            },
            "PTH2R": {
                "id": 9609,
                "inheritance": "AD"
            },
            "PTMA": {
                "id": 9623,
                "inheritance": "AD"
            },
            "BAZ2B": {
                "id": 963,
                "inheritance": "AD"
            },
            "PTPN18": {
                "id": 9649,
                "inheritance": "AD"
            },
            "PTPN4": {
                "id": 9656,
                "inheritance": "AD"
            },
            "PTPRN": {
                "id": 9676,
                "inheritance": "AD"
            },
            "BBS5": {
                "id": 970,
                "inheritance": "AD"
            },
            "QPCT": {
                "id": 9753,
                "inheritance": "AD"
            },
            "R3HDM1": {
                "id": 9757,
                "inheritance": "AD"
            },
            "RAB1A": {
                "id": 9758,
                "inheritance": "AD"
            },
            "RAB10": {
                "id": 9759,
                "inheritance": "AD"
            },
            "RABL2A": {
                "id": 9799,
                "inheritance": "AD"
            },
            "RALB": {
                "id": 9840,
                "inheritance": "AD"
            },
            "RAMP1": {
                "id": 9843,
                "inheritance": "AD"
            },
            "RANBP2": {
                "id": 9848,
                "inheritance": "AD"
            },
            "RGPD8": {
                "id": 9849,
                "inheritance": "AD"
            },
            "RBMS1": {
                "id": 9907,
                "inheritance": "AD"
            },
            "BCL2L11": {
                "id": 994,
                "inheritance": "AD"
            },
            "REG1A": {
                "id": 9951,
                "inheritance": "AD"
            },
            "REG1B": {
                "id": 9952,
                "inheritance": "AD"
            },
            "REG1CP": {
                "id": 9953,
                "inheritance": "AD"
            },
            "REL": {
                "id": 9954,
                "inheritance": "AD"
            }

        };
        return genes;
    }
}

