import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61046Page } from './s61046.page';

describe('S61046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61046Page;
  let fixture: ComponentFixture<S61046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
