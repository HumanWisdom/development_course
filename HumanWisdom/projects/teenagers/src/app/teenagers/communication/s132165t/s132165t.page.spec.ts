import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132165tPage } from './s132165t.page';

describe('S132165tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132165tPage;
  let fixture: ComponentFixture<S132165tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132165tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132165tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
