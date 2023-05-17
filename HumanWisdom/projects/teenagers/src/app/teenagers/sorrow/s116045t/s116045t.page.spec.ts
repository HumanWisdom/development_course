import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116045tPage } from './s116045t.page';

describe('S116045tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116045tPage;
  let fixture: ComponentFixture<S116045tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116045tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116045tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
