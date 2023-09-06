import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140055tPage } from './s140055t.page';

describe('S140055tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140055tPage;
  let fixture: ComponentFixture<S140055tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140055tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140055tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
