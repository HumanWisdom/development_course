import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132179tPage } from './s132179t.page';

describe('S132179tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132179tPage;
  let fixture: ComponentFixture<S132179tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132179tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132179tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
