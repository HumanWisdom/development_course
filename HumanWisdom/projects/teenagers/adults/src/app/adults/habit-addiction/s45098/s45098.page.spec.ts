import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45098Page } from './s45098.page';

describe('S45098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45098Page;
  let fixture: ComponentFixture<S45098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
