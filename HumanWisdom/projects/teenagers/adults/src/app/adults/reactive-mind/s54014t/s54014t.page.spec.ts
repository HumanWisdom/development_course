import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S54014tPage } from './s54014t.page';

describe('S54014tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54014tPage;
  let fixture: ComponentFixture<S54014tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54014tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54014tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
