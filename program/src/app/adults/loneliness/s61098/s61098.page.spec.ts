import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61098Page } from './s61098.page';

describe('S61098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61098Page;
  let fixture: ComponentFixture<S61098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
