import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18055Page } from './s18055.page';

describe('S18055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18055Page;
  let fixture: ComponentFixture<S18055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
