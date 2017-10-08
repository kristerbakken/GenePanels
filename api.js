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
        var genes = [
            "APC",
            "BMPR1A",
            "BRCA1",
            "BRCA2",
            "CDH1",
            "CDK4",
            "CDKN2A",
            "EXT1",
            "EXT2",
            "FLCN",
            "HOXB13",
            "MLH1",
            "MSH2",
            "MSH6",
            "MUTYH",
            "PALB2",
            "PMS2",
            "POLD1",
            "POLE",
            "PTEN",
            "RB1",
            "SDHB",
            "SDHD",
            "SMAD4",
            "STK11",
            "TP53",
            "VHL"
        ];
        var geneList = [];
        for (const i in genes) {
            geneList[genes[i]] = [genes[i], true];
        }
        console.log(geneList);


        return geneList;
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
                                        "disease_mode": "LOF"
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
}