import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132021Page } from './s132021.page';

describe('S132021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132021Page;
  let fixture: ComponentFixture<S132021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
