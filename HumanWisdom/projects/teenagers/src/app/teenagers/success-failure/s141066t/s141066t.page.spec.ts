import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141066tPage } from './s141066t.page';

describe('S141066tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141066tPage;
  let fixture: ComponentFixture<S141066tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141066tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141066tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
