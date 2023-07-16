import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132173tPage } from './s132173t.page';

describe('S132173tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132173tPage;
  let fixture: ComponentFixture<S132173tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132173tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132173tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
