import { Navbar } from "@/components/layout/navbar"
import { DiseaseDetectionUpload } from "@/components/disease-detection/disease-detection-upload"
import { DetectionHistory } from "@/components/disease-detection/detection-history"
import { CommonDiseases } from "@/components/disease-detection/common-diseases"

export default function DiseaseDetectionPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">AI Crop Disease Detection</h1>
            <p className="text-muted-foreground">Upload crop photos for instant AI-powered disease identification</p>
          </div>

          <DiseaseDetectionUpload />
          <DetectionHistory />
          <CommonDiseases />
        </div>
      </main>
    </div>
  )
}
