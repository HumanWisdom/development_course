import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132126tPage } from './s132126t.page';

describe('S132126tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132126tPage;
  let fixture: ComponentFixture<S132126tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132126tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132126tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
