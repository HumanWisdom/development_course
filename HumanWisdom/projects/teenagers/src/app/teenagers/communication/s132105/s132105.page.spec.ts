import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132105Page } from './s132105.page';

describe('S132105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132105Page;
  let fixture: ComponentFixture<S132105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
