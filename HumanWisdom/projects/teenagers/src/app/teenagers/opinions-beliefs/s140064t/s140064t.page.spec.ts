import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140064tPage } from './s140064t.page';

describe('S140064tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140064tPage;
  let fixture: ComponentFixture<S140064tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140064tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140064tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
