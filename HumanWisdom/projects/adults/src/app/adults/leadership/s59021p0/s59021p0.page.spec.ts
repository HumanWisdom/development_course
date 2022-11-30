import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59021p0Page } from './s59021p0.page';

describe('S59021p0Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59021p0Page;
  let fixture: ComponentFixture<S59021p0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59021p0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59021p0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
