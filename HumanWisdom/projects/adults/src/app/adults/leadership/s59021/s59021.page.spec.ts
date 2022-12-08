import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59021Page } from './s59021.page';

describe('S59021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59021Page;
  let fixture: ComponentFixture<S59021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
