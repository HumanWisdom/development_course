import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45149Page } from './s45149.page';

describe('S45149Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45149Page;
  let fixture: ComponentFixture<S45149Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45149Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45149Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
