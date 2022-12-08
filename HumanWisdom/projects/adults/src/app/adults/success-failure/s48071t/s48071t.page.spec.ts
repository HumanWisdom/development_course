import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48071tPage } from './s48071t.page';

describe('S48071tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48071tPage;
  let fixture: ComponentFixture<S48071tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48071tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48071tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
