import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45075Page } from './s45075.page';

describe('S45075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45075Page;
  let fixture: ComponentFixture<S45075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
