import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116067tPage } from './s116067t.page';

describe('S116067tPage', () => {
      
    let component:  S116067tPage;
  let fixture: ComponentFixture<S116067tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116067tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116067tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
