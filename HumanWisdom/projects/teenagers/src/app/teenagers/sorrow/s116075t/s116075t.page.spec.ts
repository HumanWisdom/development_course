import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116075tPage } from './s116075t.page';

describe('S116075tPage', () => {
      
    let component:  S116075tPage;
  let fixture: ComponentFixture<S116075tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116075tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116075tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
