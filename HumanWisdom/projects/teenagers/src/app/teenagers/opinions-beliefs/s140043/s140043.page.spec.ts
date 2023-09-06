import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140043Page } from './s140043.page';

describe('S140043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140043Page;
  let fixture: ComponentFixture<S140043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
