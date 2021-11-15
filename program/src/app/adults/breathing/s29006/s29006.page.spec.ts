import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29006Page } from './s29006.page';

describe('S29006Page', () => {
  let component: S29006Page;
  let fixture: ComponentFixture<S29006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
