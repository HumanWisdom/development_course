import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60054Page } from './s60054.page';

describe('S60054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60054Page;
  let fixture: ComponentFixture<S60054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
