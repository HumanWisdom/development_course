import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45052Page } from './s45052.page';

describe('S45052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45052Page;
  let fixture: ComponentFixture<S45052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
