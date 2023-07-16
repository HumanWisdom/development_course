import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132137Page } from './s132137.page';

describe('S132137Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132137Page;
  let fixture: ComponentFixture<S132137Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132137Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132137Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
