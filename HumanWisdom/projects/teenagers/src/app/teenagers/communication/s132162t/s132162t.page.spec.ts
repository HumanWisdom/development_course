import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132162tPage } from './s132162t.page';

describe('S132162tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132162tPage;
  let fixture: ComponentFixture<S132162tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132162tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132162tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
