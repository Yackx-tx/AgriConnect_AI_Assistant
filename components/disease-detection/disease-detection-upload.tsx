"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Camera, Loader2, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export function DiseaseDetectionUpload() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        analyzeImage()
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = async () => {
    setIsAnalyzing(true)
    setResult(null)

    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setResult({
      disease: "Late Blight",
      confidence: 92,
      severity: "Moderate",
      crop: "Tomato",
      treatment: [
        "Remove and destroy infected leaves immediately",
        "Apply copper-based fungicide every 7-10 days",
        "Improve air circulation around plants",
        "Avoid overhead watering",
      ],
      prevention: [
        "Plant resistant varieties",
        "Ensure proper spacing between plants",
        "Water at the base of plants in the morning",
        "Remove plant debris regularly",
      ],
    })

    setIsAnalyzing(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Crop Image</CardTitle>
        <CardDescription>Take or upload a photo of your crop for AI analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
          {selectedImage ? (
            <div className="space-y-4">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Uploaded crop"
                className="max-h-64 mx-auto rounded-lg"
              />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedImage(null)
                  setResult(null)
                }}
              >
                Upload Different Image
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <Camera className="h-16 w-16 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Upload a clear photo of the affected crop</p>
                <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG (Max 10MB)</p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <label className="cursor-pointer">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Image
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
                  </label>
                </Button>
                <Button variant="outline" asChild>
                  <label className="cursor-pointer">
                    <Camera className="mr-2 h-4 w-4" />
                    Take Photo
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      capture="environment"
                      onChange={handleFileUpload}
                    />
                  </label>
                </Button>
              </div>
            </>
          )}
        </div>

        {isAnalyzing && (
          <Alert>
            <Loader2 className="h-4 w-4 animate-spin" />
            <AlertTitle>Analyzing Image</AlertTitle>
            <AlertDescription>Our AI is analyzing your crop image. This may take a few seconds...</AlertDescription>
          </Alert>
        )}

        {result && (
          <div className="space-y-4">
            <Alert className="border-primary bg-primary/10">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <AlertTitle>Analysis Complete</AlertTitle>
              <AlertDescription>Disease detected with {result.confidence}% confidence</AlertDescription>
            </Alert>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{result.disease}</CardTitle>
                  <Badge variant={result.severity === "High" ? "destructive" : "secondary"}>
                    {result.severity} Severity
                  </Badge>
                </div>
                <CardDescription>
                  Detected in {result.crop} • {result.confidence}% confidence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Recommended Treatment</h4>
                  <ul className="space-y-2">
                    {result.treatment.map((step: string, index: number) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="text-primary">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Prevention Tips</h4>
                  <ul className="space-y-2">
                    {result.prevention.map((tip: string, index: number) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="text-secondary">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">Consult an Agronomist</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
