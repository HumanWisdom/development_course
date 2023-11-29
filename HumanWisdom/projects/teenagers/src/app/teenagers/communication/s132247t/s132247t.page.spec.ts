import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132243tPage } from './s132243t.page';

describe('S132243tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132243tPage;
  let fixture: ComponentFixture<S132243tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132243tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132243tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
