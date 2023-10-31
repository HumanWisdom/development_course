import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S54003tPage } from './s54003t.page';

describe('S54003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54003tPage;
  let fixture: ComponentFixture<S54003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
